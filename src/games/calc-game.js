import randomNumber from '../numbers';
import gameInit from '..';

const mathOperands = ['+', '-', '*']; // Math operands
const intro = 'What is the result of the expression?';

const getRandomMathOperand = () => mathOperands[Math.floor(Math.random() * mathOperands.length)];

const defineExpression = (num1, num2, operand) => {
  switch (operand) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    default:
      return num1 * num2; // case (*)
  }
};

/* Game Runner */
export const playGame = () => {
  const num1 = randomNumber(1, 20); // first number
  const num2 = randomNumber(1, 20); // second number
  const operand = getRandomMathOperand();

  const question = `${num1} ${operand} ${num2}`;
  const correctResult = `${defineExpression(num1, num2, operand)}`;
  return [correctResult, question];
};

export default () => {
  gameInit(intro, playGame);
};
