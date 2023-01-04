export const GenerateRandomInt = (min = 1, max = 10): number =>
  Math.random() * (max - min) + min;

export const GenerateRandomString = (count: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(Array(count))
    .map((_) => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
};

export const GenerateRandomBool = (): boolean => Math.random() < 0.5;

export const toRandomCase = (string: string): string => {
  const toRandomChar = (char: string) =>
    Math.round(Math.random()) ? char.toUpperCase() : char.toLocaleLowerCase();

  return string.split("").map(toRandomChar).join("");
};
