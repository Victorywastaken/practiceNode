const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Guess the word?\n`, (answer) => {
  if (answer === 'word') {
    console.log('You guessed it!');
  } else {
    console.log('You guessed wrong!');
  }
  rl.close();
})

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
