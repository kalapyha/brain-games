import readlineSync from 'readline-sync';

const questionsCount = 3; // Total amount of Questions during the Game

/* Game Engine */
export default (gameIntro, makeRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  console.log();
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log();

  const iter = (round, questions, player) => {
    if (!questions) {
      console.log(`Congratulations, ${player}!`);
      return true;
    }
    const [correctAnswer, question] = makeRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      iter(round, questions - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${player}!`);
      return false;
    }
    return true;
  };
  iter(makeRound, questionsCount, playerName);
};
