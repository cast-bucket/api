const config = require("./jest.config");
module.exports = {
  ...config,
  testMatch: ["**/__tests__/integration/*.spec.ts"]
};
