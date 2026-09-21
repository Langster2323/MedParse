"use client";

import { useState } from "react";
import { Medication } from "@/data/mockRecords";
import Toast from "./Toast";

interface EditableMedicationsTableProps {
  medications: Medication[];
  editMode: boolean;
  onChange: (updated: Medication[]) => void;
}

const confidenceColor = (c: string) => {
  if (c === "High") return "text-green-700 bg-green-50";
  if (c === "Medium") return "text-amber-700 bg-amber-50";
  return "text-red-700 bg-red-50";
};

export default function EditableMedicationsTable({
  medications,
  editMode,
  onChange,
}: EditableMedicationsTableProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editBuffer, setEditBuffer] = useState<Medication | null>(null);
  const [editedRows, setEditedRows] = useState<Set<number>>(new Set());
  const [showToast, setShowToast] = useState(false);

  const startEdit = (i: number) => {
    setEditingIndex(i);
    setEditBuffer({ ...medications[i] });
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditBuffer(null);
  };

  const saveEdit = (i: number) => {
    if (!editBuffer) return;
    const updated = medications.map((m, idx) => (idx === i ? { ...editBuffer } : m));
    onChange(updated);
    setEditedRows((prev) => new Set(prev).add(i));
    setEditingIndex(null);
    setEditBuffer(null);
    setShowToast(true);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50 bg-gray-50">
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-6 py-3">Medication</th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Dosage</th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Frequency</th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Confidence</th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide px-4 py-3">Source Text</th>
              {editMode && <th className="px-4 py-3 w-24" />}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {medications.map((med, i) => {
              const isEditing = editMode && editingIndex === i;
              const wasEdited = editedRows.has(i);

              return (
                <tr key={i} className={`hover:bg-gray-50/50 transition-colors ${isEditing ? "bg-blue-50/40" : ""}`}>
                  <td className="px-6 py-4">
                    {isEditing ? (
                      <input
                        autoFocus
                        value={editBuffer?.name ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, name: e.target.value } : b)}
                        className="w-full text-sm font-semibold border border-blue-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">{med.name}</p>
                        {wasEdited && (
                          <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">Edited</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {isEditing ? (
                      <input
                        value={editBuffer?.dosage ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, dosage: e.target.value } : b)}
                        className="w-full text-sm border border-blue-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      />
                    ) : (
                      <span className="text-sm text-gray-700">{med.dosage}</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {isEditing ? (
                      <input
                        value={editBuffer?.frequency ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, frequency: e.target.value } : b)}
                        className="w-full text-sm border border-blue-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      />
                    ) : (
                      <span className="text-sm text-gray-600">{med.frequency}</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {isEditing ? (
                      <select
                        value={editBuffer?.confidence ?? "High"}
                        onChange={(e) =>
                          setEditBuffer((b) =>
                            b ? { ...b, confidence: e.target.value as Medication["confidence"] } : b
                          )
                        }
                        className="text-sm border border-blue-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    ) : (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${confidenceColor(med.confidence)}`}>
                        {med.confidence}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 max-w-xs">
                    {isEditing ? (
                      <textarea
                        value={editBuffer?.relevantText ?? ""}
                        onChange={(e) => setEditBuffer((b) => b ? { ...b, relevantText: e.target.value } : b)}
                        rows={2}
                        className="w-full text-xs border border-blue-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none"
                      />
                    ) : (
                      <p className="text-xs text-gray-500 italic leading-relaxed">&ldquo;{med.relevantText}&rdquo;</p>
                    )}
                  </td>
                  {editMode && (
                    <td className="px-4 py-4">
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => saveEdit(i)}
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-lg font-medium transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1.5 rounded-lg font-medium transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => startEdit(i)}
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 font-medium transition-colors group"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          Edit
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showToast && (
        <Toast
          message="Medication updated successfully"
          type="success"
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
