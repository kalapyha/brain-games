import randomNumber from '../numbers';
import gameInit from '..';

const intro = 'What number is missing in the progression?';
const progrCount = 9; // Amount of numbers inside the progression

const createProgressionArr = () => {
  const progressionArr = [];
  progressionArr.push(randomNumber()); // Push first num to the array
  const iter = randomNumber(1, 20); // Creating another random num. It's gonna be our iterator.
  for (let i = 0; i < progrCount; i += 1) { // less then 9 - progrLength
    progressionArr.push(progressionArr[i] + iter); // next num in arr = prev num + iter
  }
  return progressionArr;
};

const hideNumInProgressionArr = (arr) => {
  const randomHideNum = (Math.floor(Math.random() * arr.length));
  const hiddenNum = arr[randomHideNum]; // init hidden num from arr
  arr.splice(arr.indexOf(hiddenNum), 1, '..');
  return [arr, hiddenNum];
};

/* Game Runner */
export const playGame = () => {
  const progressionArr = createProgressionArr();
  const [arr, num] = hideNumInProgressionArr(progressionArr);
  const question = arr.join(' ');
  const correctResult = num;
  return [correctResult, question];
};

export default () => {
  gameInit(intro, playGame);
};
