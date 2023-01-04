export function GenerateRandomInt(min = 1, max = 10): number {
  return Math.random() * (max - min) + min;
}

export function GenerateRandomString(count: number = 10): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from(Array(count))
    .map((_) => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
}
