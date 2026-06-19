"use client";

import {
  ArrowLeft,
  Share2,
  Calendar,
  Clock3,
  MapPin,
  Heart,
  MessageCircle,
} from "lucide-react";

import { Event } from "@/src/types/event";

export default function PostDetailPage({
  event,
}: {
  event: Event;
}) {
  return (
    <main className="pb-24">

      {/* Hero */}
      <div className="relative">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <button className="absolute top-4 left-4 bg-black/40 p-2 rounded-full">
          <ArrowLeft size={18} />
        </button>

        <button className="absolute top-4 right-4 bg-black/40 p-2 rounded-full">
          <Share2 size={18} />
        </button>

      </div>

      <div className="p-5">

        <h1 className="text-3xl font-bold">
          {event.title}
        </h1>

        <p className="text-gray-400 mt-1">
          {event.location}
        </p>

        {/* Organizer */}
        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-3">

            <img
              src={event.organizerAvatar}
              className="w-12 h-12 rounded-full"
              alt=""
            />

            <div>
              <p className="font-medium">
                {event.organizer}
              </p>

              <p className="text-sm text-gray-400">
                Organizer
              </p>
            </div>

          </div>

          <button className="bg-purple-600 px-4 py-2 rounded-xl">
            Follow
          </button>

        </div>

        {/* Event Info */}
        <div className="mt-8 space-y-4">

          <div className="flex gap-3">
            <Calendar size={18} />
            <span>{event.date}</span>
          </div>

          <div className="flex gap-3">
            <Clock3 size={18} />
            <span>{event.time}</span>
          </div>

          <div className="flex gap-3">
            <MapPin size={18} />
            <span>{event.location}</span>
          </div>

        </div>

        {/* Description */}
        <div className="mt-8">

          <h2 className="font-semibold mb-2">
            About Event
          </h2>

          <p className="text-gray-400 leading-7">
            {event.description}
          </p>

        </div>

        {/* Ticket */}
        <div className="mt-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm text-gray-400">
                Ticket Price
              </p>

              <h3 className="text-xl font-bold">
                {event.price}
              </h3>
            </div>

            <button className="bg-purple-600 px-5 py-3 rounded-xl">
              Buy Ticket
            </button>

          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-6 mt-8">

          <span className="flex items-center gap-2">
            <Heart size={18} />
            {event.likes}
          </span>

          <span className="flex items-center gap-2">
            <MessageCircle size={18} />
            {event.comments}
          </span>

        </div>

      </div>

    </main>
  );
}