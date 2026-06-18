"use client";

import { useState } from "react";
import {
  Home,
  Search,
  MapPin,
  Bell,
  User,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "explore", label: "Explore", icon: Search },
    { key: "nearby", label: "Nearby", icon: MapPin },
    { key: "notifications", label: "Notifications", icon: Bell },
    { key: "profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[var(--surface)] border-r border-[var(--border)] flex-col p-6">

      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-orange-500">Vibe</span>
        <span className="text-pink-500">LK</span>
      </h1>

      {/* Nav */}
      <nav className="mt-10 space-y-2">

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-white/10 text-blue-500"
                    : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon
                size={20}
                className={`transition-all ${
                  isActive ? "text-blue-500" : "text-inherit"
                }`}
              />

              <span className="text-sm font-medium">
                {item.label}
              </span>

              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}

      </nav>
    </aside>
  );
}