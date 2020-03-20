import readlineSync from 'readline-sync';

/* Game Engine */
export default (gameIntro, makeRound) => {
  const questionsCount = 3; // Total amount of Questions during the Game
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  console.log();
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log();

  const iter = (counter) => {
    if (!counter) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
    const [correctAnswer, question] = makeRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}!`);
      return false;
    }
    console.log('Correct!');
    iter(counter - 1);
    return true;
  };
  iter(questionsCount);
};
