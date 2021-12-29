import { acronym } from "../src/acronym";

describe("Acronyms", () => {
  test("It should return an acronym from a simple phrase with uppercase ", () => {
    expect(acronym("Game Boy Advanced")).toEqual("GBA");
  });

  test("It should return an acronym from a phrase without uppercase", () => {
    expect(acronym("Complementary metal-oxide semiconductor")).toEqual("CMOS");
  });

  test("It should return an acronym from a phrase with punctuation", () => {
    expect(acronym("Non-Fungible Token")).toEqual("NFT");
  });
});
