import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  bail: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [".d.ts", ".js"],
  forceExit: true,
  testMatch: ["./**/*/*.spec.ts"],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  detectOpenHandles: false,
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/infra/http/server.ts",
    "src/index.ts"
  ],
  collectCoverageFrom: ["./src/**/*.ts"]
};

export default config;
