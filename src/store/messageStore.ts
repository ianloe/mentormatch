import { create } from 'zustand';
import type { Message, Conversation } from '../types';

interface MessageState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  sendMessage: (conversationId: string, content: string) => Promise<void>;
  getConversation: (participantId: string) => Conversation | undefined;
  createConversation: (participantId: string) => Promise<string>;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  conversations: [],
  messages: {},

  sendMessage: async (conversationId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: '1', // Current user ID
      receiverId: '2', // Other participant ID
      content,
      createdAt: new Date().toISOString(),
      read: false,
    };

    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: [...(state.messages[conversationId] || []), newMessage],
      },
    }));
  },

  getConversation: (participantId: string) => {
    return get().conversations.find((conv) =>
      conv.participants.includes(participantId)
    );
  },

  createConversation: async (participantId: string) => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      participants: ['1', participantId], // '1' is current user ID
      unreadCount: 0,
    };

    set((state) => ({
      conversations: [...state.conversations, newConversation],
    }));

    return newConversation.id;
  },
}));