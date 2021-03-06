const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app);
require('./config');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Enable public folder
app.use(express.static(path.resolve(__dirname, '../public')));

// Enable comunication with backend
module.exports.io = socketIO(server);

// Listen to connections from the frontend
require('./sockets/socket-config');

// Port to listen
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err );
    console.log('Escuchando en puerto: ' + process.env.PORT)
});