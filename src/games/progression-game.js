import { createRandomNumber, getRandomNum } from '../numbers';
import gameInit from '..';

const brainProgressionIntro = 'What number is missing in the progression?';
const numbersTotal = 9;
const progressionArr = [];
let hiddenNum;

const createProgressionArr = () => {
  progressionArr.length = 0; // reset arr
  createRandomNumber(1, 20); // This is our first num in the array
  const firstNum = getRandomNum();
  progressionArr.push(firstNum); // Push this first num to the array
  createRandomNumber(1, 90); // Creating another random num. It's gonna be our iterator.
  for (let i = 0; i < numbersTotal; i += 1) { // less then 9 - numbersTotal
    progressionArr.push(progressionArr[i] + getRandomNum()); // next num in arr = prev num + iter
  }
};

const hideNumInProgressionArr = (arr) => {
  const randomHideNum = (Math.floor(Math.random() * 10)); // 10 is progressionArr.length
  hiddenNum = arr[randomHideNum]; // init hidden num from arr
  const hideIndex = arr.indexOf(hiddenNum);
  arr.splice(hideIndex, 1, '..');
};

/* Game Runner */
export const gameRunner = () => {
  createProgressionArr();
  hideNumInProgressionArr(progressionArr);
  const question = progressionArr.join(' ');
  const correctResult = hiddenNum;
  return [correctResult, question];
};

export default () => {
  gameInit(brainProgressionIntro, gameRunner);
};
