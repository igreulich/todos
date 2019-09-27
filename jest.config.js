module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/test/setupEnzyme.js'],
  testPathIgnorePatterns: [
    '<rootDir>/src/reducers/',
    '<rootDir>/src/styles/',
    '<rootDir>/src/test/',
  ],
};
