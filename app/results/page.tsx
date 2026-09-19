"use client";

import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";
import StatusBadge from "@/components/StatusBadge";
import { mockRecords } from "@/data/mockRecords";

const reviewed = mockRecords.filter((r) => r.status === "Reviewed" || r.status === "Flagged");

export default function ResultsListPage() {
  const router = useRouter();
  return (
    <AppShell>
      <TopBar title="Results" subtitle={`${reviewed.length} completed reviews`} />
      <div className="flex-1 px-8 py-6">
        <div className="grid grid-cols-2 gap-4">
          {reviewed.map((record) => (
            <div
              key={record.id}
              onClick={() => router.push(`/results/${record.id}`)}
              className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-blue-700">
                      {record.patientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{record.patientName}</p>
                    <p className="text-xs text-gray-400">{record.documentDate}</p>
                  </div>
                </div>
                <StatusBadge status={record.status} />
              </div>
              <p className="text-xs text-gray-500 mb-3">{record.documentType} · {record.provider}</p>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1 text-gray-600">
                  <span className="font-semibold text-gray-900">{record.medications.length}</span> medications
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <span className="font-semibold text-gray-900">{record.diagnoses.length}</span> diagnoses
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">Reviewed {record.reviewedDate || record.documentDate}</span>
                <span className="text-xs text-blue-600 group-hover:text-blue-700 font-medium">Open results →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
