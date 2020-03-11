import readlineSync from 'readline-sync';

const questionsCount = 3; // Total amount of Questions during the Game

/* Game Engine */
export default (gameIntro, gameRunner) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  console.log();
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}! ${'\n'}`);

  let correctAnswer;
  let playerAnswer;
  let gameContinue = true; // Changes to false after the wrong answer
  for (let i = 0; i < questionsCount; i += 1) {
    if (gameContinue) {
      const [correctResult, question] = gameRunner();
      correctAnswer = correctResult; // initialized correctAnswer to prompt in case of wrong answer
      console.log(`Question: ${question}`);
      playerAnswer = readlineSync.question('Your answer: ');
      if (`${correctResult}` === playerAnswer) {
        console.log('Correct!');
      } else {
        gameContinue = false;
      }
    }
  }
  return (gameContinue)
    ? console.log(`Congratulations, ${playerName}!`)
    : console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}!`);
};
