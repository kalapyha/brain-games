import { getNumFromArr, getMathEquation, createRandomNumArr } from '../numbers';
import gameInit from '..';

const mathOperandsArr = ['+', '-', '*']; // Math operands
const brainCalcGameIntro = 'What is the result of the expression?';
let mathOperand;

const getRandomMathOperand = () => {
  mathOperand = mathOperandsArr[Math.floor(Math.random() * mathOperandsArr.length)];
  return mathOperand;
};

const defineExpression = () => {
  switch (mathOperand) {
    case ('+'):
      return getNumFromArr(0) + getNumFromArr(1);
    case ('-'):
      return getNumFromArr(0) - getNumFromArr(1);
    case ('*'):
      return getNumFromArr(0) * getNumFromArr(1);
    default:
      throw console.error('Can\'t find Math operand');
  }
};

/* Game Runner */
export const gameRunner = () => {
  createRandomNumArr();
  const question = getMathEquation(getRandomMathOperand());
  const correctResult = `${defineExpression()}`;
  return [correctResult, question];
};

export default () => {
  gameInit(brainCalcGameIntro, gameRunner);
};
