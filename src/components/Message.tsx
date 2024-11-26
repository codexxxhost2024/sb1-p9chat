import React from 'react';
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

interface MessageProps {
  content: string;
  type: 'user' | 'assistant';
  thinking?: boolean;
}

export function Message({ content, type, thinking }: MessageProps) {
  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] p-4 rounded-lg ${
        type === 'user' 
          ? 'bg-[#4A55E7] text-white' 
          : 'bg-[#2A2B32] text-gray-100'
      }`}>
        {thinking ? (
          <div className="flex items-center gap-2">
            <div className="animate-pulse">Thinking</div>
            <div className="animate-bounce">...</div>
          </div>
        ) : (
          <>
            <p>{content}</p>
            {type === 'assistant' && (
              <div className="flex items-center gap-2 mt-2">
                <Copy size={16} className="cursor-pointer hover:text-gray-300" />
                <ThumbsUp size={16} className="cursor-pointer hover:text-gray-300" />
                <ThumbsDown size={16} className="cursor-pointer hover:text-gray-300" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}