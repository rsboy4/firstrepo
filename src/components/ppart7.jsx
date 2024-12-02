import generatePart2 from './ppart2.jsx';
import generatePart3 from './ppart3.jsx';
import generatePart4 from './ppart4.jsx';
import generatePart5 from './ppart5.jsx';

export default function StringGenerator2() {
  const part1 = "Xukr"; 
  const part2 = generatePart2(); 
  const part3 = generatePart3(); 
  const part4 = generatePart4(); 
  const part5 = generatePart5(); 
  const part6 = "tlwfNP"; 

  return `${part1}${part2}${part3}${part4}${part5}${part6}`;
}
