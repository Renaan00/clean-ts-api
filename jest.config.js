module.exports = {
  root: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'ts-jest',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
