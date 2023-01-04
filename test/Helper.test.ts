import {
  GenerateRandomBool,
  GenerateRandomInt,
  GenerateRandomString,
  toRandomCase,
} from "../src/Helper";

describe("GenerateRandomInt tests", () => {
  test("between 1 and 10", () => {
    const result = GenerateRandomInt();
    let toCompare = GenerateRandomInt();
    if (toCompare === result) toCompare = GenerateRandomInt();

    expect(result).not.toEqual(toCompare);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(10);
  });

  test("between 1 and 2", () => {
    const result = GenerateRandomInt(1, 2);
    let toCompare = GenerateRandomInt(1, 2);
    if (toCompare === result) toCompare = GenerateRandomInt(1, 2);

    expect(result).not.toEqual(toCompare);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(3);
  });
});

describe("GenerateRandomString", () => {
  test("returns 10 chars by default", () => {
    const result = GenerateRandomString();

    expect(result).toMatch(/^[A-z]{10}$/);
  });

  test("returns 1 char as passed", () => {
    const result = GenerateRandomString(1);

    expect(result).toMatch(/^[A-z]{1}$/);
  });

  test("returns 1000 chars as passed", () => {
    const result = GenerateRandomString(1000);

    expect(result).toMatch(/^[A-z]{1000}$/);
  });
});

describe("GenerateRandomBool", () => {
  test("returns random bool", () => {
    const result = GenerateRandomBool();
    let toCompare = GenerateRandomBool();
    while (toCompare === result) toCompare = GenerateRandomBool();

    expect(result).not.toEqual(toCompare);
  });
});

describe("toRandomCase", () => {
  test("returns different cases", () => {
    const string = GenerateRandomString(100);
    const result = toRandomCase(string);
    const toCompare = toRandomCase(string);

    expect(result).not.toEqual(toCompare);
  });
});
