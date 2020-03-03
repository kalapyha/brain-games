import randomNumber from '../numbers';
import gameInit from '../index';

const brainPrimeGameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) { // Guard expression
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

/* Game Runner */
export const gameRunner = () => {
  const num = randomNumber(1, 100);
  const question = num;
  const correctResult = isPrime(num) ? 'yes' : 'no';
  return [correctResult, question];
};

export default () => {
  gameInit(brainPrimeGameIntro, gameRunner);
};
