"use client";

import { MedicalRecord } from "@/data/mockRecords";

interface DocumentViewerProps {
  record: MedicalRecord;
}

type Segment = { text: string; type: "plain" | "medication" | "diagnosis" };

function buildHighlightedSegments(
  text: string,
  medications: string[],
  diagnoses: string[]
): Segment[] {
  // Build a list of all terms with their type, sorted by length desc to match longest first
  const terms: { term: string; type: "medication" | "diagnosis" }[] = [
    ...medications.map((m) => ({ term: m, type: "medication" as const })),
    ...diagnoses.map((d) => ({ term: d, type: "diagnosis" as const })),
  ].sort((a, b) => b.term.length - a.term.length);

  // Find all match ranges
  const ranges: { start: number; end: number; type: "medication" | "diagnosis" }[] = [];

  for (const { term, type } of terms) {
    // Use case-insensitive word search
    const regex = new RegExp(
      term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "gi"
    );
    let match;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      // Only add if not already covered by a previous range
      const overlaps = ranges.some((r) => start < r.end && end > r.start);
      if (!overlaps) {
        ranges.push({ start, end, type });
      }
    }
  }

  ranges.sort((a, b) => a.start - b.start);

  // Build segments
  const segments: Segment[] = [];
  let cursor = 0;
  for (const range of ranges) {
    if (range.start > cursor) {
      segments.push({ text: text.slice(cursor, range.start), type: "plain" });
    }
    segments.push({ text: text.slice(range.start, range.end), type: range.type });
    cursor = range.end;
  }
  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), type: "plain" });
  }

  return segments;
}

export default function DocumentViewer({ record }: DocumentViewerProps) {
  const medNames = record.medications.map((m) => m.name);
  const dxNames = record.diagnoses.map((d) => d.name);

  const segments = buildHighlightedSegments(
    record.extractedText,
    medNames,
    dxNames
  );

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex items-center gap-6 px-1">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Highlights</p>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-green-200 border border-green-300" />
          <span className="text-xs text-gray-600">Medications</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-blue-200 border border-blue-300" />
          <span className="text-xs text-gray-600">Diagnoses</span>
        </div>
      </div>

      {/* Document */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {/* Faux document header */}
        <div className="bg-gray-50 border-b border-gray-200 px-8 py-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-gray-800">{record.facility}</p>
            <p className="text-xs text-gray-500 mt-0.5">{record.provider}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{record.documentType}</p>
            <p className="text-xs text-gray-400 mt-0.5">{record.documentDate}</p>
          </div>
        </div>

        {/* Document body */}
        <div className="px-8 py-6">
          <div className="max-w-none text-sm leading-7 text-gray-700 font-mono whitespace-pre-wrap">
            {segments.map((seg, i) => {
              if (seg.type === "plain") {
                return <span key={i}>{seg.text}</span>;
              }
              if (seg.type === "medication") {
                return (
                  <mark
                    key={i}
                    className="bg-green-100 text-green-900 rounded px-0.5 border-b-2 border-green-400"
                    title="Medication identified"
                  >
                    {seg.text}
                  </mark>
                );
              }
              return (
                <mark
                  key={i}
                  className="bg-blue-100 text-blue-900 rounded px-0.5 border-b-2 border-blue-400"
                  title="Diagnosis identified"
                >
                  {seg.text}
                </mark>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-3 flex items-center justify-between">
          <p className="text-xs text-gray-400">Document ID: {record.id.toUpperCase()}</p>
          <p className="text-xs text-gray-400">Processed by MedParse AI</p>
        </div>
      </div>
    </div>
  );
}
