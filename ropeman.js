class ropeman{
    constructor(x,y){
        var options={
            isStatic:false,
            density:1,
            frictionAir:1,
            friction:0.5,
        }
        this.x=x;
        this.y=y;
        this.radius=40;
        this.body=Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(0,255,0)
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}