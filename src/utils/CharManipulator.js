// Shift a character by a specified offset
export function charShift(char, offset) {
  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) { // Uppercase
    return String.fromCharCode(((code - 65 + offset + 26) % 26) + 65);
  } else if (code >= 97 && code <= 122) { // Lowercase
    return String.fromCharCode(((code - 97 + offset + 26) % 26) + 97);
  }
  return char; // Non-alphabet characters remain unchanged
}

// Replace a character at a specific index
export function replaceAt(str, index, replacement) {
  return str.substring(0, index) + replacement + str.substring(index + 1);
}
