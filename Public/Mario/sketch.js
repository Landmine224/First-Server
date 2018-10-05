var mario;
var stopping = false;
var speedingup = 0;
var gravity = [0, 0];
var platforms = [];
function setup() {
	var a = createA('../Drawing', 'Drawing');
	createCanvas(windowWidth, windowHeight);
	gravity = [0, height/657];
	mario = new Character();
	for(var i = 0; i < 10; i++) {
		var x = random(-width/2, width/2);
		var y = random(-height/2, height/2);
		platforms[i] = new Platform(x, y);
	}
}

function draw(){
	background(0);
	mario.landed(platforms);
	mario.bEdge();
	mario.applyForce(gravity);
	mario.update();
	mario.show();
	if(stopping) {
		var pVel = mario.vel.x;
		mario.vel.x = lerp(pVel, 0, abs(mario.vel.x/100));
	}
	if(speedingup > 0) {
		mario.acc.x += .1;
	}else if(speedingup < 0) {
		mario.acc.x -= .1;
	}
	for(var i = 0; i < 10; i++) {
		platforms[i].show();
	}
}

function keyPressed() {
	stopping = false;
	if(keyCode === RIGHT_ARROW) {
		speedingup = 1;
	} else if(keyCode === LEFT_ARROW) {
		speedingup = -1;
	}else if(key == ' ') {
		mario.jump();
	}
}

function keyReleased() {
	if(key != ' ') {
		stopping = true;
		speedingup = 0;
	}
}