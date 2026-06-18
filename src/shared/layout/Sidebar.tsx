"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, MapPin, Bell, User } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Search },
    { href: "/nearby", label: "Nearby", icon: MapPin },
    { href: "/notifications", label: "Notifications", icon: Bell },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-40 bg-[var(--surface)] border-r border-[var(--border)] flex-col p-6">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-orange-500">Vibe</span>
        <span className="text-pink-500">LK</span>
      </h1>

      <nav className="mt-10 space-y-2">

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-white/10 text-blue-500"
                    : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={20} />

              <span className="text-sm font-medium">
                {item.label}
              </span>

              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
              )}
            </Link>
          );
        })}

      </nav>
    </aside>
  );
}