module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testMatch: ["**/__tests__/unit/*.test.ts"],
  setupTestFrameworkScriptFile: "jest-extended",
  moduleFileExtensions: ["js", "ts", "tsx"]
};
