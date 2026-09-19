"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";
import StatusBadge from "@/components/StatusBadge";
import UploadModal from "@/components/UploadModal";
import { mockRecords } from "@/data/mockRecords";

const recentRecords = mockRecords.slice(0, 8);

const summaryStats = [
  {
    label: "Documents Reviewed",
    value: "247",
    change: "+12 this week",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Pending Review",
    value: "14",
    change: "4 added today",
    positive: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Results Available",
    value: "189",
    change: "View all",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Flagged for Review",
    value: "3",
    change: "Needs attention",
    positive: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <AppShell>
      <TopBar
        title="Dashboard"
        subtitle="Welcome back — here's what's happening today"
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

      <div className="flex-1 px-8 py-6 space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-4">
          {summaryStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-xs mt-1.5 font-medium ${stat.positive ? "text-green-600" : "text-gray-400"}`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                  <span className={stat.color}>{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent documents */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Recent Documents</h2>
              <p className="text-xs text-gray-400 mt-0.5">Most recently processed records</p>
            </div>
            <button
              onClick={() => router.push("/documents")}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              View all →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-6 py-3">
                    Patient
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">
                    Document Type
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">
                    Medications
                  </th>
                  <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">
                    Diagnoses
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentRecords.map((record) => (
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
                    <td className="px-4 py-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-900">{record.medications.length}</span>
                      <span className="text-xs text-gray-400 ml-1">identified</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-gray-900">{record.diagnoses.length}</span>
                      <span className="text-xs text-gray-400 ml-1">identified</span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-xs text-blue-600 group-hover:text-blue-700 font-medium">
                        View →
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { text: "Document reviewed: Eleanor Hartwell — Primary Care Visit", time: "2 min ago", color: "bg-green-500" },
              { text: "New document uploaded: Loretta Chukwuemeka — Urgent Care", time: "18 min ago", color: "bg-blue-500" },
              { text: "Flagged for review: Patricia Okonkwo — HbA1c 9.1% above target", time: "1 hr ago", color: "bg-red-500" },
              { text: "Processing completed: Howard Nkemdirim — Sleep Medicine", time: "2 hr ago", color: "bg-purple-500" },
              { text: "Download: Desmond Fairfax — Review Form", time: "3 hr ago", color: "bg-gray-400" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color} mt-1.5 shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {uploadOpen && <UploadModal onClose={() => setUploadOpen(false)} />}
    </AppShell>
  );
}
