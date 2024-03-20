module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
      // Handle module aliases (if you're using path aliases in your TypeScript configuration)
      "^@/(.*)$": "<rootDir>/src/$1",
      // Handle CSS imports (you might need to adjust or extend these if you're using other styles or assets)
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // This configuration is necessary for testing components that use next/image or next/link
      "^.+\\.(js|jsx|ts|tsx)$": ['babel-jest', { presets: ['next/babel'] }],
    },
  };
  