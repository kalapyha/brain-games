/* eslint-disable no-param-reassign */
import randomNumber from '../random';
import playGame from '..';

const intro = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => ((num2 === 0) ? num1 : getGcd(num2, num1 % num2));

/* Game Round */
const getRound = () => {
  const num1 = randomNumber(1, 20); // first number
  const num2 = randomNumber(1, 100); // second number
  const question = `${num1} ${num2}`;

  const correctAnswer = getGcd(num1, num2).toString();
  return [correctAnswer, question];
};

export default () => {
  playGame(intro, getRound);
};
