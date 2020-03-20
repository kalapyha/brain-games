import randomNumber from '../random';
import playGame from '../index';

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) { // Guard expression
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

/* Game Round */
const getRound = () => {
  const question = randomNumber(1, 100);
  const correctResult = isPrime(question) ? 'yes' : 'no';
  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
