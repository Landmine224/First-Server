var puck;
var paddle;
var socket;
var left = 1;
var data;
var otherData;

function setup() {
	createCanvas(600, 350);
	//left = confirm("Are you the left?");

	// socket = io.connect('http://192.168.43.7:3000/');
	// socket = io.connect('http://localhost:3000/');
	socket = io.connect('http://192.168.153.1:3000/');
	// socket = io.connect('http://10.0.0.180:3000/');

	puck = new Puck();
	leftPaddle = new Paddle(12.5);
	rightPaddle = new Paddle(width - 12.5);
	// rightPaddle.pos.x = width - rightPaddle.w - 10;

	data = {puck, leftPaddle, rightPaddle};

	pushData();
	pullData();
	updatePuck(otherData);
}

function draw(){
	background(150);
	//if(frameCount % 1 == 0) {
		pushData();
		pullData();
		updatePaddle(otherData);
		// if(frameCount % 10 == 0) {
		// 	updatePuck(otherData);
		// }
	// 	if(frameCount == 1) {
	// 		pullData();
	// 		updatePuck(otherData);
	// 	}
	// }

	leftPaddle.hitLeft(puck, otherData);
	rightPaddle.hitRight(puck, otherData);

	puck.set();
	puck.show();
	puck.wall();
	// puck.set(otherData);
	puck.update();

	leftPaddle.edge();
	rightPaddle.edge();
	leftPaddle.show();
	rightPaddle.show();
	data = {puck, leftPaddle, rightPaddle};
	
}

function mouseDragged(){
	if(left){
		leftPaddle.update();
	}else{
		rightPaddle.update();
	}
}

function updateData(data) {
	otherData = data;
}

function updatePuck(otherData)	{
	if(otherData != undefined){
		// puck.angle = otherData.puck.angle;
		puck.vel.x = -otherData.puck.vel.x;
		puck.vel.y = otherData.puck.vel.y;
		puck.pos.x = width - otherData.puck.pos.x;
		puck.pos.y = otherData.puck.pos.y;
		// puck.r = otherdate.puck.r;
	}	
}

function updatePaddle(otherData) {
	if(otherData != undefined){
		rightPaddle.pos.y = otherData.leftPaddle.pos.y;
	}
}

function pushData() {
	socket.emit('pongData', data);
}
function pullData()	{
	socket.on('pongData', updateData);
}