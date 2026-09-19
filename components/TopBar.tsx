"use client";

interface TopBarProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function TopBar({ title, subtitle, action }: TopBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
