var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var gameOfLife = require('./gameOfLife.js');
var express  = require('express');
var directory = __dirname + '/public';

app.use(express.static(directory)); 

app.get('/', function(req, res){
  res.sendFile(directory + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on port 3000');
});

var cycelId = createGameCycle();

io.on('connection', function(socket){
    socket.on('refresh', function(msg) {
        clearInterval(cycelId);
        cycleId = createGameCycle();
    });
});

function createGameCycle() {
    game = gameOfLife.create();
    cycelId = setInterval(function() {
        var grid = game.tick();
        io.emit('tick', grid);
    }, 200);

    return cycelId;
}