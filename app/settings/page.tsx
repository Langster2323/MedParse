import AppShell from "@/components/AppShell";
import TopBar from "@/components/TopBar";

export default function SettingsPage() {
  return (
    <AppShell>
      <TopBar title="Settings" subtitle="Manage your account and preferences" />
      <div className="flex-1 px-8 py-8">
        <div className="max-w-2xl space-y-6">
          {[
            { label: "Organization", value: "Demo Health Systems" },
            { label: "Account Type", value: "Enterprise (Demo)" },
            { label: "AI Model", value: "MedParse AI v2.1" },
            { label: "Region", value: "US-East" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                <p className="text-sm text-gray-400 mt-0.5">{item.value}</p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Edit</button>
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 font-medium">Demo Mode Active</p>
            <p className="text-xs text-amber-600 mt-1">This is a prototype demo. Settings changes are not persisted.</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
