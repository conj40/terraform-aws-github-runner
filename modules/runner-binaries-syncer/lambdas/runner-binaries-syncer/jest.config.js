module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,jsx}', '!src/**/*local*.ts', '!src/**/*.d.ts'],
  coverageThreshold: {
    global: {
      branches: 86,
      functions: 80,
      lines: 98,
      statements: 96
    }
  }
};
