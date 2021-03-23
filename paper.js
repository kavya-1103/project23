class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}

		this.r=r
		this.body=Bodies.circle(x,y, this.r/2, options);
		
		World.add(world, this.body);

	}
	display()
	{	
			var pos=this.body.position;		
			ellipseMode(RADIUS);
			fill(255,0,255);
			ellipse(pos.x, pos.y,this.r,this.r);
			
	}

}