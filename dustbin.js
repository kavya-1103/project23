class dustbin
{
	constructor(x,y)
	{

		var options={
			isStatic:true
		}

		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
	
		
		this.bottomwall=Bodies.rectangle(x,y, this.dustbinWidth, this.wallThickness,options);
		this.leftWall=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
		this.rightWall=Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
	
		
		World.add(world, this.bottomwall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{
			var posBottom=this.bottomwall.position;
			var posL=this.leftWall.position;
			var posR=this.rightWall.position;
			rectMode(CENTER)
			fill(255)
			noStroke();
		
		rect(posBottom.x,posBottom.y, this.dustbinWidth, this.wallThickness);
		rect(posL.x,posL.y, this.wallThickness, this.dustbinHeight)
		rect(posR.x,posR.y, this.wallThickness, this.dustbinHeight)
	}

}