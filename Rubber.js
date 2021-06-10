class Rubber
{
	constructor(x,y,r)
	{
		var options = 
		{
			'friction':2,
			'restitution':1,
			'density':0.7,
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		
		ellipse(0, 0, this.r, this.r);
		pop();
	}

}