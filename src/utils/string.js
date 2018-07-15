export function truncateString (str, num) {
  if (str.length <= num) return str

  const newStr = str.substring(0, num) + '...'
  return newStr
}
