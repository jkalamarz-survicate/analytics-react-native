module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/__helpers__/'],
  modulePathIgnorePatterns: ['/lib/'],
  setupFiles: ['<rootDir>/src/__tests__/__helpers__/setup.ts'],
};
