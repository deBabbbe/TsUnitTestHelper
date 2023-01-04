export const generateRandomInt = (min = 1, max = 10): number =>
  Math.random() * (max - min) + min;

export const generateRandomString = (size: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return createArrayWithPassedSize(size)
    .map((_) => chars.charAt(Math.floor(random() * chars.length)))
    .join("");
};

export const generateRandomBool = (): boolean => random() < 0.5;

export const toRandomCase = (string: string): string =>
  string.split("").map(toRandomChar).join("");

export const generateRandomStringWithPrefix = (
  prefix: string,
  randStringSize: number = 10
): string => prefix + generateRandomString(randStringSize);

export const generateRandomList = <Type>(
  generator: () => Type,
  size: number = 10
): Type[] => createArrayWithPassedSize(size).map(generator);

const toRandomChar = (char: string): string =>
  Math.round(random()) ? char.toUpperCase() : char.toLowerCase();

const createArrayWithPassedSize = (size: number): any[] =>
  Array.from(Array(size));

const random = Math.random;

declare global {
  interface String {
    toRandomCase(): string;
  }
}

String.prototype.toRandomCase = () => toRandomCase(String(this));
