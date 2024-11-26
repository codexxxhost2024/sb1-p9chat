import React from 'react';
import { Menu, RefreshCw } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700">
      <Menu size={24} className="cursor-pointer" />
      <h1 className="text-2xl font-light">deepseek</h1>
      <RefreshCw size={24} className="cursor-pointer" />
    </header>
  );
}