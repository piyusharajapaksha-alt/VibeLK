export default function ExplorePage() {
  return (
    <main className="min-h-screen p-6 bg-[var(--background)] text-[var(--foreground)]">

      <h1 className="text-2xl font-bold">
        Explore Events 🔍
      </h1>

      <p className="text-sm opacity-70 mt-2">
        Discover trending events, food, music, and tech around Sri Lanka.
      </p>

      {/* Sample content */}
      <div className="mt-6 grid gap-4">

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Trending Music Events 🎵
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Food Festivals 🍔
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Tech Meetups 💻
        </div>

      </div>

    </main>
  );
}