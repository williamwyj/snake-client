const { stdin } = require("process");
const readline = require('readline')
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})
let connection;

const setupInput = (conn) => {
  connection = conn;
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
    }
    if (input === 'w') {
      connection.write('Move: up');
    } 
    if (input === 'a') {
      connection.write('Move: left');
    } 
    if (input === 's') {
      connection.write('Move: down');
    } 
    if (input === 'd') {
      connection.write('Move: right');
    } 
    if (input === '=') {
      connection.write(`Say: Whats up`)
    
    }
    
};

module.exports = setupInput