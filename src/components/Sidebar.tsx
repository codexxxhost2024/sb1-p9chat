import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-[#2A2B32] p-4 flex flex-col">
      <button className="flex items-center gap-2 w-full px-4 py-2 bg-[#4A55E7] rounded-lg mb-4">
        <MessageCircle size={20} />
        <span>New chat</span>
      </button>
      
      <div className="flex-grow">
        <div className="text-sm text-gray-400 mb-2">Today</div>
        <div className="space-y-2">
          <div className="px-4 py-2 hover:bg-[#343541] rounded-lg cursor-pointer">
            Previous chat 1
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#343541] rounded-lg cursor-pointer">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="Profile" />
          <span>My Profile</span>
        </div>
      </div>
    </div>
  );
}