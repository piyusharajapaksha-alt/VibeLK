export interface Event {
  id: number;
  title: string;
  location: string;
  image: string;

  likes: number;
  comments: number;

  organizer: string;
  organizerAvatar: string;

  date: string;
  time: string;

  price: string;

  description: string;

  category: string;
}