
function Paddle(x) {
	this.w = width / 40;
	this.h = height / 4;
	this.pos = new createVector(x, height/2);

	this.show = function() {
		//translate(-this.w/2, -this.h/2);
		stroke(0);
		fill(255);
		rect(this.pos.x - this.w/2, this.pos.y - this.h/2, this.w, this.h);
	}

	this.update = function() {
		this.pos.y = mouseY;
	}

	this.hitLeft = function(puck, otherData) {
		if(puck.pos.y < this.pos.y + this.h/2 && puck.pos.y > this.pos.y - this.h/2){
			if(puck.pos.x < this.pos.x + this.w/2) {
				if(puck.pos.x < this.pos.x) {
					puck.pos.x = this.pos.x + this.w/2;
				}
				//puck.r *= 2;
				puck.vel.x *= -1;
				
			}
				pushData();
				pullData();
				updatePuck(otherData);
		}
	}

		this.hitRight = function(puck, otherData) {
			if(puck.pos.y < this.pos.y + this.h/2 && puck.pos.y > this.pos.y - this.h/2){
				if(puck.pos.x > this.pos.x - this.w/2) {
					if(puck.pos.x > this.pos.x) {
						puck.pos.x = this.pos.x - this.w/2;
					}
				// puck.r *= 2;
				puck.vel.x *= -1;
				pushData();
				pullData();
			}
		}
	}

	this.edge = function() {
		if(this.pos.y < this.h/2){
			this.pos.y = this.h/2;
		} else if(this.pos.y > height - this.h/2){
			this.pos.y = height - this.h/2;
		}
	}
}