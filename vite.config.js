import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Beecorp_settings_page/', // <-- important for GitHub Pages  
});

