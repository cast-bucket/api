import { isProgrammingLanguage, transformCategory } from "../../util/transforms";

describe("Util tests", () => {
  it("should transform a given category", () => {
    expect(transformCategory(".NET")).toBe("%2ENET");
    expect(transformCategory("c++")).toBe("cpp");
    expect(transformCategory("iOS")).toBe("iOS");
    expect(transformCategory("JavaScript")).toBe("javascript");
    expect(transformCategory("js")).toBe("javascript");
    expect(transformCategory("ReasonML")).toBe("reason-ml");
  });

  it("should check if a string represents a known programming language", () => {
    expect(isProgrammingLanguage(".NET")).toBe(true);
    expect(isProgrammingLanguage("%2ENET")).toBe(true);
    expect(isProgrammingLanguage("hello")).toBe(false);
    expect(isProgrammingLanguage("cpp")).toBe(true);
    expect(isProgrammingLanguage("C++")).toBe(true);
    expect(isProgrammingLanguage("golang")).toBe(true);
    expect(isProgrammingLanguage("asdfadsf")).toBe(false);
  });
});
