export default function generatePart1() {
  const chars = [119, 101, 98]; 
  return chars.map((c) => String.fromCharCode(c)).join('');
}
