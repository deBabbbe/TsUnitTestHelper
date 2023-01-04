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

export const generateRandomStringWithPrefix = (
  prefix: string,
  randStringSize: number = 10
) => prefix + generateRandomString(randStringSize);

export function generateRandomList<Type>(
  generator: () => Type,
  count: number = 10
): Type[] {
  return Array.from(Array(count)).map(generator);
}

const toRandomChar = (char: string) =>
  Math.round(Math.random()) ? char.toUpperCase() : char.toLocaleLowerCase();
