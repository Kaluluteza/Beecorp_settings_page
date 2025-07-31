// src/components/SidebarToggle.jsx
import React from 'react';
import { Menu } from 'lucide-react';

export default function SidebarToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white dark:bg-zinc-900 rounded-full shadow-lg"
    >
      <Menu className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />
    </button>
  );
}

