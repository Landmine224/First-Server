function Puck() {

	this.pos = new createVector(width/2, height/2);
	this.r = width/60;
	this.angle = random(-PI/4, PI/4);
	this.vel = new createVector(0, 0);
	this.chance;
	// this.vel = new p5.vector()
	if(random(1) < .5){
				this.chance = -1;
			}
			this.vel.x = cos(this.angle) * 5 * this.chance;
			this.vel.y = sin(this.angle) * 5;

	this.show = function() {
		noStroke();
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2);
	};

	this.set = function(otherData) {
		if(this.pos.x > width + this.r || this.pos.x < -this.r) {
			this.angle = random(-PI/4, PI/4);
			if(random(2) < .5){
			 	this.chance = -1;
			}
			this.vel.x = cos(this.angle) * 5 * this.chance;
			this.vel.y = sin(this.angle) * 5;
			this.pos.x = width/2;
			this.pos.y = height/2;
			for(var i = 0; i < 50; i++){
				pushData();
				pullData();
				updatePuck(otherData);
			}
		}
	}

	this.update = function() {

		this.pos.x +=  this.vel.x;
		this.pos.y +=  this.vel.y;
		// if(this.pos.x = width/2){
		// 	this.r = 10;
		// }
	}

	this.wall = function() {
		if(this.pos.y < this.r) {
			this.vel.y *= -1;
		}else if(this.pos.y > height - this.r) {
			this.vel.y *= -1;
		}
	}

	
}