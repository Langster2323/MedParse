import { ReviewStatus, getStatusColor } from "@/data/mockRecords";

export default function StatusBadge({ status }: { status: ReviewStatus }) {
  const colors = getStatusColor(status);
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
      {status}
    </span>
  );
}
