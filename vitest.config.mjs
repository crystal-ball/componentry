import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/vitest.setup.mjs',

    coverage: {
      enabled: true,
      reporter: ['text-summary', 'lcov'],
      include: 'src/**/*.{ts,tsx}',
      exclude: [
        '**/*.stories.js', // Ignore story files
        '**/*.styles.ts', // Ignore PostCSS styles
        'src/plugin-babel/__fixtures__/**', // Ignore fixture files
        'src/test/**', // Ignore test files
        'src/{Media,Modal,Theme}/stories/**', // Ignore story files
      ],
    },
  },
})
