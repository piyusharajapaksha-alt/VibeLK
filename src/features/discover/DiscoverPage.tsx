import Sidebar from "@/src/shared/layout/Sidebar";
import MobileBottomNav from "@/src/shared/layout/MobileBottomNav";
import RightPanel from "@/src/shared/layout/RightPanel";

import SearchBar from "./components/SearchBar";
import CategoryTabs from "./components/CategoryTabs";
import FeedGrid from "./components/FeedGrid";
import TopBar from "@/src/shared/layout/Topbar";

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-64 xl:mr-80">

        {/* TOP BAR (NEW) */}
        <TopBar />

        {/* Page Content */}
        <div className="p-6">

          {/* Search */}
          <div className="flex gap-4 items-center mt-2">
            <SearchBar />
          </div>

          {/* Categories */}
          <div className="mt-6">
            <CategoryTabs />
          </div>

          {/* Feed */}
          <div className="mt-6">
            <FeedGrid />
          </div>

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