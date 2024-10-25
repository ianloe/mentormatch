export interface Expertise {
  id: string;
  name: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: Expertise[];
  isMentor: boolean;
  yearsOfExperience?: number;
  availability?: string;
  linkedIn?: string;
  github?: string;
  avatar?: string;
  email: string;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  authorId: string;
  authorName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

export interface MeetingSlot {
  id: string;
  mentorId: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}