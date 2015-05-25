Vector2 = function(){
	
	this.x = 0;
	this.y = 0;
}

Vector2.prototype.set = function(){
	
	x = this.x;
	y = this.y;
}

Vector2.prototype.normalize = function(){
	
	this.normalX = x / length;
	this.normalY = y / length;
}

Vector2.prototype.add = function(){

	this.x += v2.x;
	this.y += v2.y;
}

Vector2.prototype.subtract = function(){
	this.x -= v2.x;
	this.y -= v2.y;
}

Vector2.prototype.multiplyScalar = function(){
	
	this.x = x * 0;
	this.y = y * 0;	
}

	
