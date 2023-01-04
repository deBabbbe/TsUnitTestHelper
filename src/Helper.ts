export const generateRandomInt = (min = 1, max = 10): number =>
  Math.random() * (max - min) + min;

export const generateRandomString = (size: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return createArrayWithPassedSize(size)
    .map((_) => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
};

export const generateRandomBool = (): boolean => Math.random() < 0.5;

export const toRandomCase = (string: string): string =>
  string.split("").map(toRandomChar).join("");

export const generateRandomStringWithPrefix = (
  prefix: string,
  randStringSize: number = 10
) => prefix + generateRandomString(randStringSize);

export const generateRandomList = <Type>(
  generator: () => Type,
  size: number = 10
): Type[] => createArrayWithPassedSize(size).map(generator);

const toRandomChar = (char: string) =>
  Math.round(Math.random()) ? char.toUpperCase() : char.toLocaleLowerCase();

const createArrayWithPassedSize = (size: number) => Array.from(Array(size));

declare global {
  interface String {
    toRandomCase(): string;
  }
}

String.prototype.toRandomCase = () => toRandomCase(String(this));
