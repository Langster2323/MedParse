"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import ProcessingScreen from "./ProcessingScreen";
import { sampleFileMapping } from "@/data/mockRecords";

const SAMPLE_FILES = Object.keys(sampleFileMapping);

interface UploadModalProps {
  onClose: () => void;
}

export default function UploadModal({ onClose }: UploadModalProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file.name);
  };

  const handleSampleSelect = (filename: string) => {
    setSelectedFile(filename);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleReview = () => {
    if (!selectedFile) return;
    setProcessing(true);
  };

  const handleProcessingComplete = () => {
    // Map sample file to a record, or default to rec-001
    const recordId = sampleFileMapping[selectedFile!] || "rec-001";
    router.push(`/results/${recordId}`);
    onClose();
  };

  if (processing) {
    return <ProcessingScreen filename={selectedFile!} onComplete={handleProcessingComplete} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Upload Medical Document</h2>
            <p className="text-xs text-gray-400 mt-0.5">Upload a document to begin AI-powered review</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Drop zone */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? "border-blue-400 bg-blue-50"
                : selectedFile
                ? "border-green-400 bg-green-50"
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileSelect(f);
              }}
            />

            {selectedFile ? (
              <div className="space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-green-800">{selectedFile}</p>
                <p className="text-xs text-green-600">File selected — click to change</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {isDragging ? "Drop to upload" : "Drag & drop or click to select"}
                </p>
                <p className="text-xs text-gray-400">PDF, DOC, DOCX, or TXT</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or use a sample document</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Sample files */}
          <div className="space-y-2">
            {SAMPLE_FILES.map((file) => (
              <button
                key={file}
                onClick={() => handleSampleSelect(file)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all ${
                  selectedFile === file
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{file}</p>
                  <p className="text-xs text-gray-400">Sample document</p>
                </div>
                {selectedFile === file && (
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 font-medium">
            Cancel
          </button>
          <button
            onClick={handleReview}
            disabled={!selectedFile}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Review Document
          </button>
        </div>
      </div>
    </div>
  );
}
