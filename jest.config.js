/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest', // Use ts-jest for transforming TypeScript files
    testEnvironment: 'node', // Run tests in a Node.js environment
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform .ts/.tsx files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'], // Recognize these extensions
    extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  };
  