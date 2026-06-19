import { Event } from "@/src/types/event";
import Link from "next/link";

export default function FeedCard({ event }: { event: Event }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-xl hover:scale-[1.01] transition">

      {/* Image */}
      <div className="relative">
        <img
          src={event.image}
          className="w-full h-52 object-cover"
        />

        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* title on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h2 className="text-white font-bold text-lg">
            {event.title}
          </h2>
          <p className="text-white/70 text-sm">
            {event.location}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 flex justify-between text-sm text-white/70">
        <div className="flex gap-4">
          <span>❤️ {event.likes}</span>
          <span>💬 {event.comments}</span>
        </div>

        <Link
          href={`/post/${event.id}`}
          className="text-purple-400 font-medium hover:text-purple-300 transition"
        >
          View
        </Link>
      </div>

    </div>
  );
}