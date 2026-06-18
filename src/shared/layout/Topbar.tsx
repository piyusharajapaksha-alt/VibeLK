"use client";

import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-40 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-orange-500">Vibe</span>
          <span className="text-pink-500">LK</span>
        </h1>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => router.push("/notifications")}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Bell size={20} />
          </button>

        </div>
      </div>
    </div>
  );
}