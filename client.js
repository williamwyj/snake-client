const net = require("net");
const { setInterval } = require("timers/promises");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (message) => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log('Connection successful');
  });
  conn.write(`Name: WYJ`);

  // setInterval(() => {
  //   console.log('moving up');
  //   conn.write('Move: up');
  // }, 1000);
  // setTimeout(() => {
  //   conn.write(`Move: up`);
  //   console.log('moving up')
  // }, 250);
  // setTimeout(() => {
  //   conn.write(`Move: right`);
  // }, 500);
  
  return conn;
};

console.log("Connecting ...");


module.exports = connect