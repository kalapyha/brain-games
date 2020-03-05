import randomNumber from '../numbers';
import gameInit from '..';

const mathSymbols = ['+', '-', '*']; // Math operands
const intro = 'What is the result of the expression?';

const mathSymbol = () => mathSymbols[randomNumber(0, 3)];

// const getRandomMathOperand = () => mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

const defineExpression = (num1, num2, operand) => {
  switch (operand) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    case ('*'):
      return num1 * num2;
    default:
      return -1; // default case
  }
};

/* Game Runner */
export const playGame = () => {
  const num1 = randomNumber(1, 20); // first number
  const num2 = randomNumber(1, 20); // second number
  const symbol = mathSymbol();

  const question = `${num1} ${symbol} ${num2}`;
  const correctResult = `${defineExpression(num1, num2, symbol)}`;
  return [correctResult, question];
};

export default () => {
  gameInit(intro, playGame);
};
