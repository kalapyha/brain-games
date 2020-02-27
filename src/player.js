import readlineSync from 'readline-sync';
/* Here you can find interaction between the Game and a player
welcome message, playerName and playerAnswer are here as well
*/
let playerName;
let playerAnswer;

const recordUserName = () => {
  const inputName = readlineSync.question('May I have your name? ');
  playerName = inputName;
};

export const getPlayerName = () => playerName;

export const promptWelcomeMessage = (gameIntro) => {
  console.log(`${'\n'}'Welcome to the Brain Games!' ${'\n'} ${gameIntro} ${'\n'}`);
  recordUserName();
  console.log(`Hello, ${getPlayerName()}! ${'\n'}`);
};

export const recordPlayerAnswer = () => {
  const inputAnswer = readlineSync.question('Your answer: ');
  playerAnswer = inputAnswer;
};

export const getPlayerAnswer = () => playerAnswer;
