/* eslint-disable no-param-reassign */
import { getNumFromArr, getMathEquation, createRandomNumArr } from '../numbers';
import gameInit from '..';

const brainGCDIntro = 'Find the greatest common divisor of given numbers.';

const defineGreatestDivider = (num1, num2) => {
  while (num2) {
    const tempNumHolder = num2;
    num2 = num1 % num2;
    num1 = tempNumHolder;
  }
  return num1;
};

const defineGCDAnswer = () => defineGreatestDivider(getNumFromArr(0), getNumFromArr(1));

/* Game Runner */
export const gameRunner = () => {
  createRandomNumArr();
  const question = getMathEquation();
  const correctResult = defineGCDAnswer();
  return [correctResult, question];
};

export default () => {
  gameInit(brainGCDIntro, gameRunner);
};
