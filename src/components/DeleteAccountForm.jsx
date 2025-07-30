// src/components/DeleteAccountForm.jsx
import React from "react";

export default function DeleteAccountForm() {
  return (
    <form className="bg-red-100 dark:bg-red-900 shadow p-6 rounded w-full max-w-md text-red-700 dark:text-red-200">
      <h4 className="text-lg font-medium mb-4">Delete Account</h4>
      <p className="text-sm mb-4 text-red-600 dark:text-red-300">
        Warning: This action cannot be undone.
      </p>
      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Confirm Delete
      </button>
    </form>
  );
}

