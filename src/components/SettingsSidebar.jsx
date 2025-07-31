// src/components/SettingsSidebar.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Settings, Search, BookOpen, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SettingsSidebar({ isOpen, onClose }) {
  const [generalOpen, setGeneralOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 shadow-lg overflow-y-auto transform transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Close Button for Mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={onClose}>
          <X className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />
        </button>
      </div>

      <div className="p-6 border-b border-zinc-200 dark:border-zinc-700 flex items-center space-x-2">
        <Settings className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Settings</h2>
      </div>

      {/* General Section */}
      <div className="px-4 py-2">
        <button
          onClick={() => setGeneralOpen(!generalOpen)}
          className="flex items-center justify-between w-full text-left font-medium py-2 hover:text-blue-600"
        >
          <span>General</span>
          {generalOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>

        {generalOpen && (
          <ul className="ml-2 mt-2 space-y-2 text-sm">
            {[
              ['Edit Password', '/settings/edit-password'],
              ['Email Settings', '/settings/email'],
              ['Delete Account', '/settings/delete'],
              ['Deleted Media', '/settings/deleted-media'],
            ].map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`${isActive(path) ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'} block`}
                  onClick={onClose} // close menu on mobile after clicking link
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Coming Soon */}
      <div className="px-4 py-2 mt-6 border-t border-zinc-200 dark:border-zinc-700">
        <h3 className="text-sm uppercase text-zinc-500 dark:text-zinc-400 mb-2">Coming Soon</h3>
        <ul className="space-y-2 text-sm text-zinc-400 cursor-not-allowed">
          <li className="flex items-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </li>
          <li className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>Library</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

