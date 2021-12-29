import { lowerCase } from "../src/lowerCase";

describe("LowerCase", () => {
  test("It should return a lowered case string", () => {
    expect(lowerCase("Hello World")).toEqual("hello world");
  });

  test("It should return a lowered case string with character that are not letters", () => {
    expect(lowerCase("What's 9 + 10")).toEqual("what's 9 + 10");
  });
});
