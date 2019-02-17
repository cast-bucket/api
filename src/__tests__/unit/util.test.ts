import { transformKeys } from "../../models/util";

describe("Util tests", () => {
  it("should transformKeys", () => {
    expect(transformKeys(".NET")).toBe("%2ENET");
  });
});
