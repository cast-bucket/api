export function transformKeys(key: string) {
  let output = key;
  if (/\./g.test(key)) output = key.replace(/\./g, "%2E");
  return output;
}
