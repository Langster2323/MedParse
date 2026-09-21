"use client";

import { useState } from "react";
import { Diagnosis } from "@/data/mockRecords";
import Toast from "./Toast";

interface EditableDiagnosisListProps {
  diagnoses: Diagnosis[];
  editMode: boolean;
  onChange: (updated: Diagnosis[]) => void;
}

export default function EditableDiagnosisList({
  diagnoses,
  editMode,
  onChange,
}: EditableDiagnosisListProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editBuffer, setEditBuffer] = useState<Diagnosis | null>(null);
  const [editedRows, setEditedRows] = useState<Set<number>>(new Set());
  const [showToast, setShowToast] = useState(false);

  const startEdit = (i: number) => {
    setEditingIndex(i);
    setEditBuffer({ ...diagnoses[i] });
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditBuffer(null);
  };

  const saveEdit = (i: number) => {
    if (!editBuffer) return;
    const updated = diagnoses.map((d, idx) => (idx === i ? { ...editBuffer } : d));
    onChange(updated);
    setEditedRows((prev) => new Set(prev).add(i));
    setEditingIndex(null);
    setEditBuffer(null);
    setShowToast(true);
  };

  return (
    <>
      <div className="divide-y divide-gray-50">
        {diagnoses.map((dx, i) => {
          const isEditing = editMode && editingIndex === i;
          const wasEdited = editedRows.has(i);

          return (
            <div key={i} className={`px-6 py-4 transition-colors ${isEditing ? "bg-blue-50/40" : "hover:bg-gray-50/50"}`}>
              {isEditing ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1 block">Diagnosis Name</label>
                      <input
                        autoFocus
                        value={editBuffer?.name ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, name: e.target.value } : b)}
                        className="w-full text-sm font-semibold border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      />
                    </div>
                    <div className="w-32">
                      <label className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1 block">ICD-10 Code</label>
                      <input
                        value={editBuffer?.icdCode ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, icdCode: e.target.value } : b)}
                        className="w-full text-sm font-mono border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1 block">Source Text</label>
                    <textarea
                      value={editBuffer?.relevantText ?? ""}
                      onChange={(e) => setEditBuffer((b) => b ? { ...b, relevantText: e.target.value } : b)}
                      rows={2}
                      className="w-full text-xs border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1 block">Date / Context</label>
                    <input
                      value={editBuffer?.dateContext ?? ""}
                      onChange={(e) => setEditBuffer((b) => b ? { ...b, dateContext: e.target.value } : b)}
                      className="w-full text-sm border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => saveEdit(i)}
                      className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900">{dx.name}</p>
                      <span className="text-xs font-mono bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                        {dx.icdCode}
                      </span>
                      {wasEdited && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">Edited</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 italic leading-relaxed">&ldquo;{dx.relevantText}&rdquo;</p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-2">
                    <p className="text-xs text-gray-400">{dx.dateContext}</p>
                    {editMode && (
                      <button
                        onClick={() => startEdit(i)}
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 font-medium transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showToast && (
        <Toast
          message="Diagnosis updated successfully"
          type="success"
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
