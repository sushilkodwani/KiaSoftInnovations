import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base is '/' because the site is served from the root of a custom domain
// (kiasoftinnovations.com). If you ever serve it from
// https://<user>.github.io/<repo>/ instead, set base to '/<repo>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5180, strictPort: true },
});
