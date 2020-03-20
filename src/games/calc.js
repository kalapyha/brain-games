import randomNumber from '../random';
import playGame from '..';

const signs = ['+', '-', '*'];
const intro = 'What is the result of the expression?';

const getMathSign = () => signs[randomNumber(0, signs.length - 1)];

const calculateExpression = (num1, num2, sign) => {
  switch (sign) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    case ('*'):
      return num1 * num2;
    default:
      return false; // default case
  }
};

/* Game Round */
const getRound = () => {
  const num1 = randomNumber(1, 20); // first number
  const num2 = randomNumber(1, 20); // second number
  const sign = getMathSign();

  const question = `${num1} ${sign} ${num2}`;
  const correctResult = calculateExpression(num1, num2, sign).toString();
  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
