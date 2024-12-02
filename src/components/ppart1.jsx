import { charShift } from '../utils/CharManipulator';

export default function generatePart1() {
  const chars = ['U', 'v', 'l', 's']; // Offset letters
  return chars.map((c) => charShift(c, -3)).join(''); 
}
