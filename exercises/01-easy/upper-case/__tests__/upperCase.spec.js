import { upperCase } from "../src/upperCase";

describe("UpperCase", () => {
  test("It should return an upper case string", () => {
    expect(upperCase("hello world")).toEqual("HELLO WORLD");
  });

  test("It should return an upper case string with character that are not letters", () => {
    expect(upperCase("what's 9 + 10")).toEqual("WHAT'S 9 + 10");
  });
});
