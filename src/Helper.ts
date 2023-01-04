export const generateRandomInt = (min = 1, max = 10): number =>
  Math.random() * (max - min) + min;

export const generateRandomString = (count: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(Array(count))
    .map((_) => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
};

export const generateRandomBool = (): boolean => Math.random() < 0.5;

export const toRandomCase = (string: string): string =>
  string.split("").map(toRandomChar).join("");

const toRandomChar = (char: string) =>
  Math.round(Math.random()) ? char.toUpperCase() : char.toLocaleLowerCase();
