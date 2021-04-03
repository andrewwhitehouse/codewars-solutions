const {rps} = require('./rockPaperScissors')

describe('Rock Paper Scissors', () => {
  it('Scissors cut paper', () => {
    expect(rps('scissors', 'paper')).toBe('player1');
  });
  it('checks other cases correctly', () => {
    let testCases = [
      ['scissors', 'scissors', 'draw'],
      ['scissors', 'rock', 'player2'],
      ['rock', 'scissors', 'player1'],
      ['rock', 'paper', 'player2'],
      ['rock', 'rock', 'draw'],
      ['paper', 'scissors', 'player2'],
      ['paper', 'paper', 'draw'],
      ['paper', 'rock', 'player1']
    ];
    for([player1Choice, player2Choice, expectedResult] of testCases) {
      expect(rps(player1Choice, player2Choice)).toBe(expectedResult);
    }
  });
  it('throws error for invalid player1 choice', () => {
      expect(() => rps('orange', 'paper')).toThrow('Invalid choice orange for player1');
  });
  it('throws error for invalid player2 choice', () => {
      expect(() => rps('rock', 'banana')).toThrow('Invalid choice banana for player2');
  });
});
