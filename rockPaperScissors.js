const SCISSORS = 'scissors';
const PAPER = 'paper';
const ROCK = 'rock';

function validateChoice(choice, chooser) {
  let validChoices = {[SCISSORS]: 1, [PAPER]: 1, [ROCK]: 1};
  if (!(choice in validChoices)) {
    throw new Error(`Invalid choice ${choice} for ${chooser}`);
  }
}

function rps(player1Choice, player2Choice) {
  validateChoice(player1Choice, 'player1');
  validateChoice(player2Choice, 'player2');
  if (player1Choice === player2Choice) {
    return 'draw';
  } else if (player1Choice == SCISSORS) {
    return player2Choice === PAPER ? 'player1' : 'player2';
  } else if (player1Choice === PAPER) {
    return player2Choice === SCISSORS ? 'player2' : 'player1';
  } else { // player 1 picks rock
    return player2Choice === SCISSORS ? 'player1' : 'player2';
  }
}

module.exports = {rps};
