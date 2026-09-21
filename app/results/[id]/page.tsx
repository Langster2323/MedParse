"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";
import StatusBadge from "@/components/StatusBadge";
import DownloadButton from "@/components/DownloadButton";
import DocumentViewer from "@/components/DocumentViewer";
import EditableMedicationsTable from "@/components/EditableMedicationsTable";
import EditableDiagnosisList from "@/components/EditableDiagnosisList";
import { getRecord, Medication, Diagnosis } from "@/data/mockRecords";

type ViewMode = "extracted" | "document";

export default function ResultsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const baseRecord = getRecord(id);

  // Local editable state — no DB needed, session-only
  const [medications, setMedications] = useState<Medication[]>(
    baseRecord?.medications ?? []
  );
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>(
    baseRecord?.diagnoses ?? []
  );
  const [viewMode, setViewMode] = useState<ViewMode>("extracted");
  const [editMode, setEditMode] = useState(false);

  if (!baseRecord) {
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

  // Compose a record with the current (possibly edited) data for downloads
  const currentRecord = { ...baseRecord, medications, diagnoses };

  const highConfCount = medications.filter((m) => m.confidence === "High").length;
  const confidencePct = medications.length > 0
    ? Math.round((highConfCount / medications.length) * 100)
    : 100;

  return (
    <AppShell>
      <TopBar
        title="Review Results"
        subtitle={`${baseRecord.patientName} — ${baseRecord.documentType}`}
        action={
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              ← Back
            </button>
            <DownloadButton record={currentRecord} />
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
                  {baseRecord.patientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{baseRecord.patientName}</h2>
                <p className="text-sm text-gray-500">Date of Birth: {baseRecord.dateOfBirth}</p>
              </div>
            </div>
            <StatusBadge status={baseRecord.status} />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4 pt-5 border-t border-gray-100">
            {[
              { label: "Document Type", value: baseRecord.documentType },
              { label: "Document Date", value: baseRecord.documentDate },
              { label: "Provider", value: baseRecord.provider },
              { label: "Facility", value: baseRecord.facility },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{item.label}</p>
                <p className="text-sm text-gray-800 font-medium mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-700">{medications.length}</p>
              <p className="text-xs text-green-600 mt-0.5">Medications Identified</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-700">{diagnoses.length}</p>
              <p className="text-xs text-blue-600 mt-0.5">Diagnoses Identified</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-purple-700">{confidencePct}%</p>
              <p className="text-xs text-purple-600 mt-0.5">High Confidence Extractions</p>
            </div>
          </div>
        </div>

        {/* View toggle + Edit mode controls */}
        <div className="flex items-center justify-between">
          {/* View switcher */}
          <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 gap-1">
            <button
              onClick={() => setViewMode("extracted")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "extracted"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Extracted Data
            </button>
            <button
              onClick={() => setViewMode("document")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "document"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Source Document
            </button>
          </div>

          {/* Edit mode toggle — only visible in extracted view */}
          {viewMode === "extracted" && (
            <button
              onClick={() => setEditMode((e) => !e)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                editMode
                  ? "bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
              }`}
            >
              {editMode ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Done Editing
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Extractions
                </>
              )}
            </button>
          )}
        </div>

        {/* Edit mode banner */}
        {editMode && viewMode === "extracted" && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Edit mode active.</span> Click &ldquo;Edit&rdquo; on any row to correct extracted data. Changes are reflected in the downloaded review form.
            </p>
          </div>
        )}

        {/* Main content area */}
        {viewMode === "document" ? (
          <DocumentViewer record={currentRecord} />
        ) : (
          <>
            {/* Medications */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Identified Medications</h3>
                <span className="ml-auto text-xs text-gray-400">{medications.length} found</span>
              </div>
              <EditableMedicationsTable
                medications={medications}
                editMode={editMode}
                onChange={setMedications}
              />
            </div>

            {/* Diagnoses */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Identified Diagnoses</h3>
                <span className="ml-auto text-xs text-gray-400">{diagnoses.length} found</span>
              </div>
              <EditableDiagnosisList
                diagnoses={diagnoses}
                editMode={editMode}
                onChange={setDiagnoses}
              />
            </div>

            {/* Bottom download CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-900">Ready to export this review?</p>
                <p className="text-xs text-blue-600 mt-0.5">
                  The downloaded form will include any edits you&apos;ve made above.
                </p>
              </div>
              <DownloadButton record={currentRecord} />
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
