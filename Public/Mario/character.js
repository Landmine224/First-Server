
function Character(){
	this.r = 10;
	this.pos = createVector(0, height/2 - this.r);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.topspeed = 10;
	this.numJumps = 1;

	this.show = function() {
		push();
		translate(width/2, height/2);
		noStroke();
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2);
		pop();
	}

	this.update = function() {
		// this.vel = constrain(this.vel, -this.topspeed, this.topspeed);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		if(this.vel.x < .1 && this.vel.x > -.1) {
			this.vel.x = 0;
		}
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.landed = function(platforms) {
		for(var i = 0; i < platforms.length; i++) {
			if(this.pos.y + this.r < platforms[i].pos.y + platforms[i].h && this.pos.y + this.r > platforms[i].pos.y - platforms[i].h && this.pos.x < platforms[i].pos.x + platforms[i].w/2 && this.pos.x > platforms[i].pos.x - platforms[i].w/2) {
				this.pos.y = platforms[i].pos.y - platforms[i].h ;
				this.vel.y = 0;
				this.numJumps = 1;
			}
		}
	}

	this.bEdge = function() {
		if(this.pos.y > height/2 - this.r) {
			this.pos.y = height/2 - this.r;
			this.vel.y = 0;
			this.numJumps = 1;
		}
	}

	this.jump = function() {
		if(this.numJumps > 0) {
			this.applyForce([0, -floor(height/32)]);
			this.numJumps--;
		}
	}

	this.sides = function() {
		return (this.pos.x < this.r || this.pos.x > width - r);
	}
}