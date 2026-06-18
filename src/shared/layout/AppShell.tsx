"use client";

import { useState } from "react";
import MobileBottomNav from "./MobileBottomNav";

import DiscoverPage from "@/src/features/discover/DiscoverPage";
import ExplorePage from "@/src/features/explore/ExplorePage";
import NearbyPage from "@/src/features/nearby/NearbyPage";
import ProfilePage from "@/src/features/profile/ProfilePage";

export default function AppShell() {
  const [active, setActive] = useState("discover");

  const renderPage = () => {
    switch (active) {
      case "explore":
        return <ExplorePage />;
      case "nearby":
        return <NearbyPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <DiscoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="pb-16">{renderPage()}</div>

      <MobileBottomNav active={active} setActive={setActive} />
    </div>
  );
}