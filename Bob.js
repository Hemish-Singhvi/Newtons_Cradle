class Bob {
    constructor(x, y, radius){
        var options = {
            'restitution':1.2,
            'density':1.2,
            'isStatic':false
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("purple");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}