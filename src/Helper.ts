export const GenerateRandomInt = (min = 1, max = 10): number =>
  Math.random() * (max - min) + min;

export const GenerateRandomString = (count: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(Array(count))
    .map((_) => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
};
