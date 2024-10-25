import { useState } from 'react';
import { useMessageStore } from '../../store/messageStore';
import { format } from 'date-fns';
import { Send } from 'lucide-react';

interface ChatWindowProps {
  conversationId: string;
}

export default function ChatWindow({ conversationId }: ChatWindowProps) {
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useMessageStore();
  const conversationMessages = messages[conversationId] || [];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessage(conversationId, message);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversationMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderId === '1' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.senderId === '1'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs opacity-75">
                {format(new Date(msg.createdAt), 'HH:mm')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 input-primary"
          />
          <button type="submit" className="btn-primary">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}