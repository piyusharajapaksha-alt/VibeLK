export default function NearbyPage() {
  return (
    <main className="min-h-screen p-6 bg-[var(--background)] text-[var(--foreground)]">

      <h1 className="text-2xl font-bold">
        Nearby Events 📍
      </h1>

      <p className="text-sm opacity-70 mt-2">
        Events happening close to your location.
      </p>

      <div className="mt-6 space-y-4">

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Colombo Night Festival 🌃
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Galle Beach Party 🏖️
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          Kandy Cultural Show 🎭
        </div>

      </div>

    </main>
  );
}