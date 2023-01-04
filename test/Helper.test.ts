import {
  generateRandomBool,
  generateRandomInt,
  generateRandomList,
  generateRandomString,
  generateRandomStringWithPrefix,
  toRandomCase,
} from "../src/Helper";

describe("generateRandomInt", () => {
  test("returns number between 1 and 10", () => {
    const result = generateRandomInt();
    let toCompare = generateRandomInt();
    if (toCompare === result) toCompare = generateRandomInt();

    expect(result).not.toEqual(toCompare);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(10);
  });

  test("returns number between 1 and 2", () => {
    const result = generateRandomInt(1, 2);
    let toCompare = generateRandomInt(1, 2);
    if (toCompare === result) toCompare = generateRandomInt(1, 2);

    expect(result).not.toEqual(toCompare);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(3);
  });
});

describe("generateRandomString", () => {
  test("returns 10 chars by default", () => {
    const result = generateRandomString();

    expect(result).toMatch(/^[A-z]{10}$/);
  });

  test("returns 1 char as passed", () => {
    const result = generateRandomString(1);

    expect(result).toMatch(/^[A-z]{1}$/);
  });

  test("returns 1000 chars as passed", () => {
    const result = generateRandomString(1000);

    expect(result).toMatch(/^[A-z]{1000}$/);
  });
});

describe("generateRandomBool", () => {
  test("returns random bool", () => {
    const result = generateRandomBool();
    let toCompare = generateRandomBool();
    while (toCompare === result) toCompare = generateRandomBool();

    expect(result).not.toEqual(toCompare);
  });
});

describe("toRandomCase", () => {
  test("returns different cases", () => {
    const string = generateRandomString(100);
    const result = toRandomCase(string);
    const toCompare = toRandomCase(string);

    expect(result).not.toEqual(toCompare);
  });
});

describe("generateRandomStringWithPrefix", () => {
  test("adds prefix to random string", () => {
    const prefix = generateRandomString();
    const result = generateRandomStringWithPrefix(prefix);
    const guidResult = result.substring(prefix.length);

    expect(result).toMatch(new RegExp("^" + prefix + ".*?$"));
    expect(guidResult.length).toBe(10);
  });

  test("add prefix to random string with 3 chars", () => {
    const randCharCount = 3;
    const prefix = generateRandomString(5);
    const result = generateRandomStringWithPrefix(prefix, randCharCount);
    const guidResult = result.substring(prefix.length);

    expect(result).toMatch(new RegExp("^" + prefix + ".*?$"));
    expect(guidResult.length).toBe(randCharCount);
  });
});

describe("generateRandomList", () => {
  test("creates list with 10 elements", () => {
    const generator = () => "a";
    const result = generateRandomList(generator);
    const expected = "aaaaaaaaaa".split("");

    expect(result).toEqual(expected);
  });

  test("creates list with 3 elements", () => {
    const generator = () => "abc";
    const result = generateRandomList(generator, 3);
    const expected = "abc,abc,abc".split(",");

    expect(result).toEqual(expected);
  });
});
