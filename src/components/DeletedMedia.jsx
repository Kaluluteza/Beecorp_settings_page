import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeletedImages from './DeletedImages';
import DeletedMusic from './DeletedMusic';

export default function DeletedMedia() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        // Use bg-white dark:bg-zinc-900 plus your rounded shadow styles:
        className="bg-white dark:bg-zinc-900 rounded-xl shadow p-4 overflow-hidden"
      >
        <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-t-xl">
          <h2 className="font-semibold text-lg text-zinc-900 dark:text-white">Deleted Media</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-blue-500 hover:underline"
          >
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 space-y-4 max-h-[60vh] overflow-y-auto text-zinc-900 dark:text-white"
            >
              <section>
                <h3 className="font-semibold mb-2">Images</h3>
                <DeletedImages />
              </section>

              <section>
                <h3 className="font-semibold mb-2">Music</h3>
                <DeletedMusic />
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

