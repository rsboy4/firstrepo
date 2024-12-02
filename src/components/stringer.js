import generatePart1 from './part1';
import generatePart2 from './part2';
import generatePart3 from './part3';
import generatePart4 from './part4.jsx';

export default function StringGenerator() {
  const part1 = generatePart1(); // Generates "web"
  const part2 = generatePart2(); // Generates "dev"
  const part3 = generatePart3(); // Generates "play"
  const part4 = generatePart4(); // Generates "list"

  return `${part1}${part2}${part3}${part4}`;
}
