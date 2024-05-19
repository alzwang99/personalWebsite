import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // Other Vite configurations...
    build: {
      // Ensure that assets are emitted with the correct file names and paths
      assetsInlineLimit: 0, // Disables asset size limit
      rollupOptions: {
        // Include any additional configurations for Rollup, if needed
        output: {
          // Ensure that assets are emitted to the correct directory
          assetFileNames: '[name].[ext]'
        }
      }
    }
})
