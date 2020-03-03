import {
  getPlayerName,
  promptWelcomeMessage,
  recordPlayerAnswer,
  getPlayerAnswer,
} from './player';

const questionsCount = 3; // Total amount of Questions during the Game

/* Game Engine */
export default (gameIntro, gameRunner) => {
  promptWelcomeMessage(gameIntro);
  let question;
  let correctAnswer;
  let isGameContinue = true; // Changes to false after the wrong answer
  for (let i = 0; i < questionsCount; i += 1) {
    if (isGameContinue) {
      const [correctResult, questionNum] = gameRunner();
      question = questionNum;
      correctAnswer = correctResult; // initialized correctAnswer to prompt in case of wrong answer
      console.log(`Question: ${question}`);
      recordPlayerAnswer();
      if (`${correctResult}` === `${getPlayerAnswer()}`) {
        console.log('Correct!');
        // increaseQuestionIterator();
      } else {
        isGameContinue = false;
      }
    }
  }
  return (isGameContinue)
    ? console.log(`Congratulations, ${getPlayerName()}!`)
    : console.log(`'${getPlayerAnswer()}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${getPlayerName()}!`);
};
