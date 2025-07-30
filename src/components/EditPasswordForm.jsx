// src/components/EditPasswordForm.jsx
import React from "react";

export default function EditPasswordForm() {
  return (
    <form className="bg-white dark:bg-zinc-900 shadow p-6 rounded w-full max-w-md text-zinc-900 dark:text-white">
      <h4 className="text-lg font-medium mb-4">Edit Password</h4>
      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Password
        </button>
      </div>
    </form>
  );
}

