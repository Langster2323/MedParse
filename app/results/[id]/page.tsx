"use client";

import { useParams, useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";
import StatusBadge from "@/components/StatusBadge";
import DownloadButton from "@/components/DownloadButton";
import { getRecord } from "@/data/mockRecords";

const confidenceColor = (c: string) => {
  if (c === "High") return "text-green-700 bg-green-50";
  if (c === "Medium") return "text-amber-700 bg-amber-50";
  return "text-red-700 bg-red-50";
};

export default function ResultsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const record = getRecord(id);

  if (!record) {
    return (
      <AppShell>
        <TopBar title="Record Not Found" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-4">This record could not be found.</p>
            <button onClick={() => router.push("/")} className="text-blue-600 text-sm hover:underline">
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <TopBar
        title="Review Results"
        subtitle={`${record.patientName} — ${record.documentType}`}
        action={
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              ← Back
            </button>
            <DownloadButton record={record} />
          </div>
        }
      />

      <div className="flex-1 px-8 py-6 space-y-6">
        {/* Document info header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-700">
                  {record.patientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{record.patientName}</h2>
                <p className="text-sm text-gray-500">Date of Birth: {record.dateOfBirth}</p>
              </div>
            </div>
            <StatusBadge status={record.status} />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 pt-5 border-t border-gray-100">
            {[
              { label: "Document Type", value: record.documentType },
              { label: "Document Date", value: record.documentDate },
              { label: "Provider", value: record.provider },
              { label: "Facility", value: record.facility },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{item.label}</p>
                <p className="text-sm text-gray-800 font-medium mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-700">{record.medications.length}</p>
              <p className="text-xs text-green-600 mt-0.5">Medications Identified</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-700">{record.diagnoses.length}</p>
              <p className="text-xs text-blue-600 mt-0.5">Diagnoses Identified</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-700">
                {Math.round((record.medications.filter((m) => m.confidence === "High").length / record.medications.length) * 100) || 100}%
              </p>
              <p className="text-xs text-purple-600 mt-0.5">High Confidence Extractions</p>
            </div>
          </div>
        </div>

        {/* Medications */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Identified Medications</h3>
            <span className="ml-auto text-xs text-gray-400">{record.medications.length} found</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50">
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-6 py-3">Medication</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Dosage</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Frequency</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Confidence</th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Source Text</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {record.medications.map((med, i) => (
                  <tr key={i} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{med.name}</p>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">{med.dosage}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{med.frequency}</td>
                    <td className="px-4 py-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${confidenceColor(med.confidence)}`}>
                        {med.confidence}
                      </span>
                    </td>
                    <td className="px-4 py-4 max-w-xs">
                      <p className="text-xs text-gray-500 italic leading-relaxed">&ldquo;{med.relevantText}&rdquo;</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Diagnoses */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Identified Diagnoses</h3>
            <span className="ml-auto text-xs text-gray-400">{record.diagnoses.length} found</span>
          </div>

          <div className="divide-y divide-gray-50">
            {record.diagnoses.map((dx, i) => (
              <div key={i} className="px-6 py-4 hover:bg-gray-50/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900">{dx.name}</p>
                      <span className="text-xs font-mono bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                        {dx.icdCode}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 italic leading-relaxed">&ldquo;{dx.relevantText}&rdquo;</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-gray-400">{dx.dateContext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracted text */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Extracted Document Text</h3>
          </div>
          <div className="px-6 py-5">
            <pre className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-mono bg-gray-50 rounded-lg p-4 border border-gray-100">
              {record.extractedText}
            </pre>
          </div>
        </div>

        {/* Bottom download CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-900">Ready to export this review?</p>
            <p className="text-xs text-blue-600 mt-0.5">Download a complete review form with all extracted information.</p>
          </div>
          <DownloadButton record={record} />
        </div>
      </div>
    </AppShell>
  );
}
