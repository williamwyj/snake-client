const net = require("net");
const { setInterval } = require("timers/promises");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
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




module.exports = connect