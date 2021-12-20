import { countWord } from "../src/countWord";

describe("Word Count", () => {
  test("It should count one word", () => {
    const expected = {
      banana: 1,
    };

    expect(countWord("banana")).toEqual(expected);
  });

  test("It should count one for each word", () => {
    const expected = {
      cookies: 1,
      from: 1,
      the: 1,
      fridge: 1,
    };

    expect(countWord("cookies from the fridge")).toEqual(expected);
  });

  test("It should count multiple occurrences of a word", () => {
    const expected = {
      two: 2,
      plus: 1,
      is: 1,
      four: 3,
    };

    expect(countWord("two plus two is four")).toEqual(expected);
  });

  test("It should count words and ignore punctuation", () => {
    const expected = {
      "I'm": 1,
      a: 1,
      banana: 1,
    };

    expect(countWord("I'm a banana")).toEqual(expected);
  });

  test("It should count words case insensitive", () => {
    const expected = {
      skrrat: 1,
      gottionem: 1,
      "skidi-kat-kat": 1,
    };

    expect(countWord("Skrrat (GottiOnEm), skidi-kat-kat").toEqual(expected));
  });
});
