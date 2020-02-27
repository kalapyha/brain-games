import { createRandomNumber, getRandomNum } from '../numbers';
import gameInit from '..';

const brainEvenGameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0; // Check if num is even

/* Game Runner */
export const gameRunner = () => {
  createRandomNumber(1, 100); // min 1, max 100
  const question = getRandomNum();
  const correctResult = ((isEvenNum(getRandomNum())) ? 'yes' : 'no');
  return [correctResult, question];
};

export default () => {
  gameInit(brainEvenGameIntro, gameRunner);
};
