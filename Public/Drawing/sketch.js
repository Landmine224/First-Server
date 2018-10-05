var socket;
var client;
var color = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(200);

	// socket = io.connect('http://192.168.43.7:3000/');
	// socket = io.connect('http://localhost:3000/');	
	socket = io.connect('http://192.168.153.1:3000/');
	// socket = io.connect('http://10.0.0.180:3000/');

	client = new Client(mouseIsPressed, mouseX, mouseY);
	color.Push = ["blue", "red", "green", "orange", "yellow"];
	for(var i = 0; i < 5; i++) {
		fill(color(color));
		ellipse(20, i * 40 + 20, 20);
	}
}

function mouseDragged(){

	stroke(0);
	strokeWeight(10);
	line(client.previousX, client.previousY, client.x, client.y);
	client.update();
	var data = client;
	//sending this client's data 
	socket.emit('drawingData', data);
	//recieving other client's data
	socket.on('drawingData', newDrawing);
}

function newDrawing(data){
	if(data.mp){
		stroke(0, 255, 0);
	}else{
		stroke(255);
	}
	strokeWeight(10);
	line(data.previousX, data.previousY, data.x, data.y);}
