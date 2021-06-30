const { stderr } = require('process');
const connect = require('./client')
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(input) {
    if (input === '\u0003') {
      console.log('Program terminated')
      process.exit();
    };
};



connect();
setupInput();


