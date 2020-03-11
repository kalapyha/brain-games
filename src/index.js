import readlineSync from 'readline-sync';

const questionsCount = 3; // Total amount of Questions during the Game

/* Game Engine */
export default (gameIntro, runGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  console.log();
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log();

  const run = (round, iter = questionsCount, player = playerName) => {
    if (!iter) {
      console.log(`Congratulations, ${player}!`);
      return true;
    }
    const [correctResult, question] = runGame();
    const correctAnswer = correctResult; // initialized
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctResult === playerAnswer) {
      console.log('Correct!');
      run(round, iter - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${player}!`);
      return false;
    }
    return true;
  };
  run(runGame, questionsCount, playerName);
};
