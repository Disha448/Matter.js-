class Paper{
    constuctor(x,y,radius){
        var options = {
            'restitution':0.8,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
          
			

        
        }
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.body= Bodies.circle(this.x,this.y,this.radius/2,options);
        
        World.add(world.this.body);
    }
}
display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    ellipse(0, 0, this.radius,this.radius);
    pop();
};
