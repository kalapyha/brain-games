import { getRandomNum, createRandomNumber } from '../numbers';
import gameInit from '../index';

const brainPrimeGameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) { // Guard expression
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1; // false if num less than 1
};

const isPrimeAnswer = () => (isPrime(getRandomNum()) ? 'yes' : 'no');

/* Game Runner */
export const gameRunner = () => {
  createRandomNumber(1, 100);
  const question = getRandomNum();
  const correctResult = `${isPrimeAnswer()}`;
  return [correctResult, question];
};

export default () => {
  gameInit(brainPrimeGameIntro, gameRunner);
};
