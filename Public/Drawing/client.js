
function Client(mp, x, y) {
	//this.id = id;
	this.previousX = x;
	this.previousY = y;
	this.x = x;
	this.y = y;
	this.mp = mp;
	this.sid;

	this.update = function() {
		this.previousX = pmouseX;
		this.previousY = pmouseY;
		this.x = mouseX;
		this.y = mouseY;
		this.mp = mouseIsPressed
	};
}