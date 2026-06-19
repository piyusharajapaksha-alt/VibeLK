import { events } from "@/src/data/events";
import MobileBottomNav from "@/src/shared/layout/MobileBottomNav";
import RightPanel from "@/src/shared/layout/RightPanel";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pb-24">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-[var(--background)] border-b border-[var(--border)] p-4">

        <h1 className="text-2xl font-bold">
          Explore
        </h1>

        <input
          placeholder="Search events..."
          className="mt-4 w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto p-4">

        {[
          "All",
          "Music",
          "Food",
          "Technology",
          "Sports",
          "Nightlife",
        ].map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] whitespace-nowrap"
          >
            {category}
          </button>
        ))}

      </div>

      {/* Trending */}
      <div className="px-4">

        <h2 className="font-bold text-lg mb-4">
          Trending Events
        </h2>

        <div className="grid grid-cols-2 gap-4">

          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]"
            >

              <img
                src={event.image}
                alt={event.title}
                className="h-36 w-full object-cover"
              />

              <div className="p-3">

                <h3 className="font-semibold text-sm line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-xs opacity-70 mt-1">
                  {event.location}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Popular Organizers */}
      <div className="mt-8 px-4">

        <h2 className="font-bold text-lg mb-4">
          Popular Organizers
        </h2>

        <div className="flex gap-4 overflow-x-auto">

          {events.slice(0, 6).map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-center min-w-[80px]"
            >

              <img
                src={event.organizerAvatar}
                className="w-16 h-16 rounded-full"
                alt=""
              />

              <p className="text-xs text-center mt-2">
                {event.organizer}
              </p>

            </div>
          ))}

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