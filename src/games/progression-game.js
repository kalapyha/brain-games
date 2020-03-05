import randomNumber from '../random';
import playGame from '..';

const intro = 'What number is missing in the progression?';
const progrCount = 9; // Amount of numbers inside the progression

const createProgression = (num) => {
  const progression = [];
  progression.push(randomNumber()); // Push first num to the array
  const iter = randomNumber(1, 20); // Creating another random num. It's gonna be our iterator.
  for (let i = 0; i < num; i += 1) { // less then progrCount - progrLength
    progression.push(progression[i] + iter); // next num in arr = prev num + iter
  }
  return progression;
};

const hideNumInProgressionArr = (arr) => {
  const randomHideNum = (Math.floor(Math.random() * arr.length));
  const hiddenNum = arr[randomHideNum]; // init hidden num from arr
  arr.splice(arr.indexOf(hiddenNum), 1, '..');
  return [arr, hiddenNum];
};

/* Game Round */
const getRound = () => {
  const progressionArr = createProgression(progrCount);
  const [arr, num] = hideNumInProgressionArr(progressionArr);
  const question = arr.join(' ');
  const correctResult = num;
  return [correctResult, question];
};

export default () => {
  playGame(intro, getRound);
};
