function Platform(x, y) {
	this.pos = createVector(x, y);
	this.h = 20;
	this.w = random(50, 100);
	this.show = function() {
		push();
		translate(width/2,height/2);
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.w, this.h);
		pop();
	}
}