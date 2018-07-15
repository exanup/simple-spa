export function truncateString (str, num) {
  if (str.length <= num) return str

  const newStr = str.substring(0, num) + '...'
  return newStr
}

export function formatAuthorName (author) {
  const fName = author.first_name
  const lName = author.last_name
  const name = `${fName} ${lName}`
  return name
}
