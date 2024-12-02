import { charShift } from '../utils/CharManipulator';

export default function generatePart6() {
  const chars = ['q', 'p', 'm', 'u', 'K', 'M']; // Offset letters
  return chars.map((c, i) => charShift(c, i % 2 === 0 ? 3 : -3)).join(''); // Shift alternately
}
