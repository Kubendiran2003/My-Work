import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Specify the root directory for Vite (if needed)
  root: './', // Optional, depending on your project structure

  // Build configuration
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for assets
  },

  // Add a base path for SPA routing, especially for deployment
  base: '/', // This is the default and typically used for most SPA deployments

  server: {
    // You can configure dev server settings like port, proxy, etc.
    port: 3000, // Change to match your local dev server port
    open: true,  // Open the app in the browser automatically
  },
});
