const readline = require('readline');
const os = require('os');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Play a game?\n`, (answer) => {
  if (answer === 'yes') {
    console.log(`Let's begin!`);
  } else {
    console.log('You guessed wrong!');
  }
  rl.close();
})

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

class Wordle {
  constructor(secretWord){
    this.remainingGuesses = 5;
    this.gameState = 'playing';
    this.secretWord = secretWord;
    this.guessedLetters = [];
  }

  guessWord(str){
    if (str === this.secretWord) {
      this.gameState = 'won';
    } else {
      this.remainingGuesses--;
      if (this.remainingGuesses === 0) {
        this.gameState = 'lost';
      }
    }
  }
}
