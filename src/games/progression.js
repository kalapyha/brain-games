import randomNumber from '../random';
import playGame from '..';

const intro = 'What number is missing in the progression?';
const progressionCount = 10; // Amount of numbers inside the progression

const createProgression = (first, step, iter) => ((iter === 0) ? []
  : [first, ...createProgression(first + step, step, iter - 1)]);

/* Game Round */
const getRound = () => {
  const first = randomNumber(1, 100);
  const step = randomNumber(1, 25);
  const index = randomNumber(0, progressionCount);

  const progression = createProgression(first, step, progressionCount);
  const correctResult = progression[index].toString();
  progression.splice(index, 1, '..'); // hide num
  const question = progression.join(' ');

  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
