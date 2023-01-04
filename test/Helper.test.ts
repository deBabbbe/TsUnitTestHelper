describe("GenerateRandomInt tests", () => {
  test("between 1 and 10", () => {
    const result = GenerateRandomInt();
    let toCompare = GenerateRandomInt();
    if (toCompare === result) toCompare = GenerateRandomInt();

    expect(result).not.toEqual(toCompare);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(10);
  });
});
