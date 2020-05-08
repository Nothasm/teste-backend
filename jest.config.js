module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.test.ts?(x)"],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
        diagnostics: false
      }
    },
    // collectCoverage: true,
    // collectCoverageFrom: ["src/**/**"],
    // coverageDirectory: "coverage",
    // coverageThreshold: {
    //   global: {
    //     branches: 70,
    //     functions: 70,
    //     lines: 70,
    //     statements: 70,
    //   },
    // }
  };