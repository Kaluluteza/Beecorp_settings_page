import { useState, useEffect } from 'react';
import SettingsPage from './pages/SettingsPage';
import DarkModeToggle from './components/DarkModeToggle'; // optional toggle button

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-4 flex justify-end">
        <DarkModeToggle isDark={darkMode} toggle={() => setDarkMode(!darkMode)} />
      </header>

      <SettingsPage />
    </div>
  );
}

export default App;

