"use client";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-3 py-2">
      <input
        className="flex-1 bg-transparent outline-none"
        placeholder="Search events, food, vibes..."
      />
    </div>
  );
}