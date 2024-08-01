import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ourcemap: false, 
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Create a vendor chunk for node_modules
          vendor: ['react', 'react-dom'],
          // Add other chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
  },
})
