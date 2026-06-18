export default function NotificationsPage() {
  return (
    <main className="min-h-screen p-6 bg-[var(--background)] text-[var(--foreground)]">

      {/* Header */}
      <h1 className="text-2xl font-bold">
        Notifications 🔔
      </h1>

      <p className="text-sm opacity-70 mt-2">
        Stay updated with your latest activity and event alerts.
      </p>

      {/* Notification List */}
      <div className="mt-6 space-y-3">

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          🎉 New event near you: Sunset Music Festival in Colombo
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          ❤️ Someone liked your event post
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          📍 New nearby event added in Galle Beach Party
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          🔥 Trending: Tech Meetup Colombo is now popular
        </div>

        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          👤 Your profile was viewed 12 times today
        </div>

      </div>

    </main>
  );
}