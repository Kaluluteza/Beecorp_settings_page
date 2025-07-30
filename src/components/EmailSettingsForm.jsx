// src/components/EmailSettings.jsx
import React from "react";

export default function EmailSettings() {
  return (
    <form className="bg-white dark:bg-zinc-900 shadow p-6 rounded w-full max-w-xl mx-auto text-zinc-900 dark:text-white">
      <h4 className="text-lg font-medium mb-4">Email Settings</h4>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="New Email Address"
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Email
        </button>
      </div>
    </form>
  );
}

