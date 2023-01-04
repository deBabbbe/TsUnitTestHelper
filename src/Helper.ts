export function GenerateRandomInt(min = 1, max = 10): number {
  return Math.random() * (max - min) + min;
}

export function GenerateRandomString(count: number = 10) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
