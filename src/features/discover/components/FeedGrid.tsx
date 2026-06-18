"use client";

import FeedCard from "./FeedCard";
import { events } from "@/src/data/events";

export default function FeedGrid() {
  return (
    <div className="grid gap-4">
      {events.map((event) => (
        <FeedCard key={event.id} event={event} />
      ))}
    </div>
  );
}