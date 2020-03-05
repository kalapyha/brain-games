import randomNumber from '../numbers';
import gameInit from '..';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // Check if num is even

/* Game Runner */
export const playGame = () => {
  // const num = randomNumber(1, 100);
  const question = randomNumber(1, 100);
  const correctResult = isEven(question) ? 'yes' : 'no';
  return [correctResult, question];
};

export default () => {
  gameInit(intro, playGame);
};
