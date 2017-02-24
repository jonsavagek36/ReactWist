let express = require('express');
let app = express();
let path = require('path');
let wist = require('./wistapp');

app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || 5000;
let http = require('http').createServer(app).listen(port);

let io = require('socket.io')(http);

io.sockets.on('connect', function(socket) {
  wist.init(io, socket);
});
