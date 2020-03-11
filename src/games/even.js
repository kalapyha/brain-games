import randomNumber from '../random';
import playGame from '..';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // Check if num is even

/* Game Round */
const getRound = () => {
  const question = randomNumber(1, 100);
  const correctResult = isEven(question) ? 'yes' : 'no';
  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
