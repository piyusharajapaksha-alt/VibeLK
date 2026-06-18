"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, MapPin, User } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Search },
    { href: "/nearby", label: "Nearby", icon: MapPin },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="h-16 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-around">

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <Icon
                size={22}
                className={
                  isActive
                    ? "text-blue-500"
                    : "text-[var(--text-muted)]"
                }
              />

              <span
                className={`text-[11px] mt-1 ${
                  isActive
                    ? "text-blue-500 font-medium"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

      </div>
    </div>
  );
}