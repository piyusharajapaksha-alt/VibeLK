import Sidebar from "@/src/shared/layout/Sidebar";
import MobileBottomNav from "@/src/shared/layout/MobileBottomNav";
import RightPanel from "@/src/shared/layout/RightPanel";
import ThemeToggle from "@/src/shared/theme/ThemeToggle";

import SearchBar from "./components/SearchBar";
import CategoryTabs from "./components/CategoryTabs";
import FeedGrid from "./components/FeedGrid";

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-64 xl:mr-80">

        <div className="p-6">

          {/* Search + Theme */}
          <div className="flex gap-10 items-center">
            <SearchBar />
            <ThemeToggle />
          </div>

          {/* Title 
          <h1 className="text-3xl font-bold mt-8">
            Discover
          </h1> 

          <p className="text-sm opacity-70 mt-2">
            Discover. Enjoy. Everyday.
          </p> */}

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