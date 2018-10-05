var socket;
var links = [];
var first = true;

function setup() {
	socket = io.connect('http://192.168.153.1:3000/');
	// socket = io.connect('http://localhost:3000/');
	// socket = io.connect('http://192.168.43.7:3000/');
	// socket = io.connect('http://10.0.0.180:3000/');
}

function draw() {
	socket.on('dirs', display);
}

function display(data) {
	if(first) {
		for(var i = 0; i < data.length - 1; i++) {
			var splitData = data[i].split("\\");
			createP();
			links[i] = createA(splitData[5], splitData[5]+"\\");
		}
		first = false;
	}
}
