/** @type {import('jest').Config} */
module.exports = {
  // Simulates a browser (document, window, events) so components can render
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  // Find test files with Node instead of Watchman. A broken local Watchman install makes Jest
  // exit without running any test and still report success
  watchman: false,
  // Compiles TypeScript and JSX with SWC. Types are checked by `tsc` in `yarn validate`, not here
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      jsc: { transform: { react: { runtime: 'automatic' } } },
    }],
  },
  // Jest can't read SCSS. With identity-obj-proxy, `styles.button` returns 'button'
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^src(/.*)?$': '<rootDir>/src$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // With --coverage: measure every library file, not only the ones a test imports
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/stories/**',
    '!src/setupTests.ts',
    '!src/index.tsx',
    '!src/declaration.d.ts',
  ],
}
