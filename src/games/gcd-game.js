/* eslint-disable no-param-reassign */
import randomNumber from '../numbers';
import gameInit from '..';

const intro = 'Find the greatest common divisor of given numbers.';

const defineGreatestDivider = (num1, num2) => {
  while (num2) {
    const tempNumHolder = num2;
    num2 = num1 % num2;
    num1 = tempNumHolder;
  }
  return num1;
};

/* Game Runner */
export const playGame = () => {
  const num1 = randomNumber(1, 20); // first number
  const num2 = randomNumber(1, 100); // second number
  const question = `${num1} ${num2}`;

  const correctResult = defineGreatestDivider(num1, num2);
  return [correctResult, question];
};

export default () => {
  gameInit(intro, playGame);
};
