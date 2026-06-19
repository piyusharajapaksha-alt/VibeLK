import MobileBottomNav from "@/src/shared/layout/MobileBottomNav";
import RightPanel from "@/src/shared/layout/RightPanel";

export default function ProfilePage() {
  return (
    <main className="min-h-screen p-6 bg-[var(--background)] text-[var(--foreground)]">

      <h1 className="text-2xl font-bold">
        Your Profile 👤
      </h1>

      <p className="text-sm opacity-70 mt-2">
        Manage your account and activity.
      </p>

      {/* Profile card */}
      <div className="mt-6 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">

        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-xl font-bold">
          P
        </div>

        <h2 className="mt-4 text-lg font-semibold">
          Piyusha Daham
        </h2>

        <p className="text-sm opacity-70">
          Event Explorer • Sri Lanka
        </p>

      </div>

      {/* Options */}
      <div className="mt-6 space-y-3">

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          My Events
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Saved Events
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Settings
        </div>

      </div>
      {/* Right Panel */}
      <div className="hidden xl:block fixed right-0 top-0 h-screen">
        <RightPanel />
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

    </main>
  );
}