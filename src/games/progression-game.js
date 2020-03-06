import randomNumber from '../random';
import playGame from '..';

const intro = 'What number is missing in the progression?';
const progrCount = 9; // Amount of numbers inside the progression

const createProgression = (startNum, iter, length, hiddenIndex) => {
  const progression = [startNum];
  for (let i = 0; i < length; i += 1) { // less then progrCount - progrLength
    progression.push(progression[i] + iter); // next num in arr = prev num + iter
  }
  const hiddenNum = progression[hiddenIndex]; // init hidden num from progression
  progression.splice(progression.indexOf(hiddenNum), 1, '..'); // hidden num

  return [progression, hiddenNum];
};

/* Game Round */
const getRound = () => {
  const [progression, correctResult] = createProgression(randomNumber(1, 100),
    randomNumber(1, 25),
    progrCount,
    randomNumber(0, progrCount));
  const question = progression.join(' ');
  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
