
var express = require('express');
var app = express();
var dir = require('node-dir');

//var http = require('http');

var server = app.listen(3000, '192.168.153.1');
// var server = app.listen(3000);
// var server = app.listen(3000, '192.168.43.7');
// var server = app.listen(3000, '10.0.0.180');

//server.listen(443, '10.0.0.180')

app.use(express.static('Public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket){
	console.log("New connection: " + socket.id);

	dir.readFiles(__dirname, {
    match: /.html$/,
    excludeDir: ['node_modules','p5', 'test']
    }, function(err, content, next) {
        if (err) throw err;
        next();
    },
    function(err, files){
        if (err) throw err;
        socket.emit('dirs', files);
    });

	socket.on('drawingData', drawingDataMsg);

	socket.on('pongData', pongDataMsg);

	function pongDataMsg(data){
		socket.broadcast.emit('pongData', data);
	}

	function drawingDataMsg(data){
		socket.broadcast.emit('drawingData', data);
	}


}