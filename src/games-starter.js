import readlineSync from 'readline-sync';
import runEvenGame from './games/even-game';
import runCalcGame from './games/calc-game';
import runGCDGame from './games/gcd-game';
import runProgressionGame from './games/progression-game';
import runPrimeGame from './games/prime-game';

const menuChoice = () => {
  const playerChoice = readlineSync.question(`Choose game from the list below.\n
  Select the game number!
    1) brain-even
    2) brain-calc
    3) brain-gcd
    4) brain-progression
    5) brain-prime
  Number: `);

  switch (playerChoice) {
    case '1':
      return runEvenGame();
    case '2':
      return runCalcGame();
    case '3':
      return runGCDGame();
    case '4':
      return runProgressionGame();
    case '5':
      return runPrimeGame();
    default:
      console.log(`Try again, '${playerChoice}' is not in the game list!`);
      return menuChoice();
  }
};

export default menuChoice;
