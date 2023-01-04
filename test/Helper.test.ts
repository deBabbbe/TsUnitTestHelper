import { GenerateRandomInt, GenerateRandomString } from "../src/Helper";

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
  test("10 chars by default", () => {
    const result = GenerateRandomString();

    expect(result).toMatch(/^[A-z]{10}$/);
  });

  test("1 char", () => {
    const result = GenerateRandomString(1);

    expect(result).toMatch(/^[A-z]{1}$/);
  });

  test("1000 chars", () => {
    const result = GenerateRandomString(1000);

    expect(result).toMatch(/^[A-z]{1000}$/);
  });
});
