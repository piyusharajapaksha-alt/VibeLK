"use client";

import Sidebar from "./Sidebar";
import MobileBottomNav from "./MobileBottomNav";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* MAIN CONTENT AREA (IMPORTANT FIX) */}
      <main className="lg:ml-64 xl:mr-80 min-h-screen">
        <div className="p-6 pb-24 lg:pb-6">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden">
        <MobileBottomNav />
      </div>

    </div>
  );
}