export default {
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: 'jsdom', // Use JSDOM environment for testing React
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library/jest-dom)/)', // Add other modules if needed
  ],
  globals: {
    'import.meta': {},
  }
};
