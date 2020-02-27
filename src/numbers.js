let randomNum;
const randomNumArr = [];

/* Reusable functions */
export const createRandomNumber = (min = 1, max = 10) => { // for even, prime & progr games
  randomNum = (Math.floor(Math.random() * max) + min);
};

export const getRandomNum = () => randomNum; // for even-game, prime-game and progression game

export const createRandomNumArr = () => { // for calc-game and gcd-game
  for (let i = 0; i < 2; i += 1) {
    createRandomNumber(1, 50);
    randomNumArr.unshift(getRandomNum());
  }
};

export const getNumFromArr = (iter) => randomNumArr[iter]; // for calc-game and gcd-game

export const getMathEquation = (symbol = ' ') => (`${getNumFromArr(0)} ${symbol} ${getNumFromArr(1)}`); // for calc-game and gcd-game
