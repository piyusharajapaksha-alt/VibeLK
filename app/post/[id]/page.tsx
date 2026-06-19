import { events } from "@/src/data/events";
import PostDetailPage from "@/src/features/post-detail/PostDetailPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return <div>Event not found</div>;
  }

  return <PostDetailPage event={event} />;
}