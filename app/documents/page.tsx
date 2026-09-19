"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";
import StatusBadge from "@/components/StatusBadge";
import UploadModal from "@/components/UploadModal";
import { mockRecords, ReviewStatus } from "@/data/mockRecords";

const STATUS_FILTERS: (ReviewStatus | "All")[] = ["All", "Reviewed", "Pending Review", "In Progress", "Flagged"];

export default function DocumentsPage() {
  const router = useRouter();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<ReviewStatus | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = mockRecords.filter((r) => {
    const matchStatus = statusFilter === "All" || r.status === statusFilter;
    const matchSearch =
      !search ||
      r.patientName.toLowerCase().includes(search.toLowerCase()) ||
      r.documentType.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <AppShell>
      <TopBar
        title="Documents"
        subtitle={`${mockRecords.length} total records`}
        action={
          <button
            onClick={() => setUploadOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Document
          </button>
        }
      />

      <div className="flex-1 px-8 py-6 space-y-4">
        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search patients or documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-1">
            {STATUS_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  statusFilter === s
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-6 py-3">Patient</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Document Type</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Date</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Provider</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Meds</th>
                <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Diagnoses</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-sm text-gray-400">
                    No records found.
                  </td>
                </tr>
              ) : (
                filtered.map((record) => (
                  <tr
                    key={record.id}
                    onClick={() => router.push(`/results/${record.id}`)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <span className="text-xs font-semibold text-blue-700">
                            {record.patientName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{record.patientName}</p>
                          <p className="text-xs text-gray-400">DOB: {record.dateOfBirth}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">{record.documentType}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{record.documentDate}</td>
                    <td className="px-4 py-4 text-xs text-gray-500">{record.provider}</td>
                    <td className="px-4 py-4"><StatusBadge status={record.status} /></td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{record.medications.length}</td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{record.diagnoses.length}</td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-xs text-blue-600 group-hover:text-blue-700 font-medium">View →</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {uploadOpen && <UploadModal onClose={() => setUploadOpen(false)} />}
    </AppShell>
  );
}
