export default function generatePart4() {
  const str = 'lise';
  const transformed = str.split('').map((char, i) => {
    if (i === 3) return 't'; 
    return char;
  });
  return transformed.join('');
}
