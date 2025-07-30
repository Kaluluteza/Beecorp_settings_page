// src/components/SettingsSidebar.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Settings, Search, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function SettingsSidebar() {
  const [generalOpen, setGeneralOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 shadow-lg overflow-y-auto">
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
            <li>
              <Link
                to="/settings/edit-password"
                className={`${isActive('/settings/edit-password') ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'} block`}
              >
                Edit Password
              </Link>
            </li>
            <li>
              <Link
                to="/settings/email"
                className={`${isActive('/settings/email') ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'} block`}
              >
                Email Settings
              </Link>
            </li>
            <li>
              <Link
                to="/settings/delete"
                className={`${isActive('/settings/delete') ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'} block`}
              >
                Delete Account
              </Link>
            </li>
            <li>
              <Link
                to="/settings/deleted-media"
                className={`${isActive('/settings/deleted-media') ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'} block`}
              >
                Deleted Media
              </Link>
            </li>
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

