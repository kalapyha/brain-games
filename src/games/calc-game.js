import randomNumber from '../numbers';
import gameInit from '..';

const mathOperandsArr = ['+', '-', '*']; // Math operands
const brainCalcGameIntro = 'What is the result of the expression?';
let mathOperand;

const getRandomMathOperand = () => {
  mathOperand = mathOperandsArr[Math.floor(Math.random() * mathOperandsArr.length)];
  return mathOperand;
};

const defineExpression = (num1, num2) => {
  switch (mathOperand) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    case ('*'):
      return num1 * num2;
    default:
      throw console.error('Can\'t find Math operand');
  }
};

/* Game Runner */
export const gameRunner = () => {
  const num1 = randomNumber(1, 10); // first number
  const num2 = randomNumber(1, 10); // second number

  const question = `${num1} ${getRandomMathOperand()} ${num2}`;
  const correctResult = `${defineExpression(num1, num2)}`;
  return [correctResult, question];
};

export default () => {
  gameInit(brainCalcGameIntro, gameRunner);
};
