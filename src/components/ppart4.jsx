export default function generatePart4() {
  const encoded = 'sj=c-3';
  return encoded.replace('j', 'i').replace('c', 'b').replace('3', '2'); 
}
