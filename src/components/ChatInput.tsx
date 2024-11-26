import React from 'react';
import { Send, Paperclip } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  return (
    <div className="p-4 border-t border-gray-700">
      <div className="relative max-w-3xl mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Message DeepSeek..."
          className="w-full px-4 py-3 bg-[#2A2B32] rounded-lg pr-24 focus:outline-none focus:ring-2 focus:ring-[#4A55E7]"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Paperclip size={20} className="text-gray-400 cursor-pointer hover:text-gray-300" />
          <button
            onClick={handleSend}
            className="p-2 bg-[#4A55E7] rounded-lg hover:bg-[#3A44D6] transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}