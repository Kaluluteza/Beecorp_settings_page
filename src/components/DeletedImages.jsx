import React from "react";

export default function DeletedImages() {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow p-6 rounded w-full max-w-md text-zinc-900 dark:text-white">
      <h4 className="text-lg font-medium mb-4">Deleted Images</h4>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b border-zinc-300 dark:border-zinc-700 p-2">Image Name</th>
            <th className="border-b border-zinc-300 dark:border-zinc-700 p-2">Date Deleted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">image1.png</td>
            <td className="p-2">2025-07-25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

