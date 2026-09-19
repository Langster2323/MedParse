"use client";

import { useEffect, useState } from "react";

interface ProcessingScreenProps {
  filename: string;
  onComplete: () => void;
}

const STAGES = [
  { label: "Uploading document", detail: "Transferring file to secure processing environment..." },
  { label: "Reading document", detail: "Parsing document structure and extracting raw text..." },
  { label: "Identifying medications", detail: "Running NLP models to detect medication references..." },
  { label: "Identifying diagnoses", detail: "Cross-referencing ICD-10 code patterns and clinical terminology..." },
  { label: "Extracting relevant information", detail: "Mapping extracted data to structured review format..." },
  { label: "Preparing results", detail: "Finalizing review and generating output..." },
];

export default function ProcessingScreen({ filename, onComplete }: ProcessingScreenProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalDuration = 4500; // ms
    const intervalMs = 80;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += intervalMs;
      const pct = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);
      setProgress(pct);

      const stageIndex = Math.min(
        Math.floor((pct / 100) * STAGES.length),
        STAGES.length - 1
      );
      setCurrentStage(stageIndex);

      if (pct >= 100) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => onComplete(), 600);
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="w-full max-w-md px-8 text-center">
        {/* Animated icon */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent transition-transform"
            style={{
              animation: done ? "none" : "spin 1s linear infinite",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {done ? (
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          {done ? "Review Complete" : "Analyzing Document"}
        </h2>
        <p className="text-sm text-gray-400 mb-8 truncate max-w-xs mx-auto">{filename}</p>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Processing</span>
            <span className="text-xs font-semibold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stage list */}
        <div className="space-y-2 text-left">
          {STAGES.map((stage, i) => {
            const isComplete = i < currentStage || done;
            const isCurrent = i === currentStage && !done;
            return (
              <div
                key={i}
                className={`flex items-start gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  isCurrent ? "bg-blue-50" : ""
                }`}
              >
                <div className={`w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center ${
                  isComplete
                    ? "bg-green-100"
                    : isCurrent
                    ? "bg-blue-100"
                    : "bg-gray-100"
                }`}>
                  {isComplete ? (
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    isComplete ? "text-gray-600" : isCurrent ? "text-blue-800" : "text-gray-400"
                  }`}>
                    {stage.label}
                  </p>
                  {isCurrent && (
                    <p className="text-xs text-blue-500 mt-0.5">{stage.detail}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
