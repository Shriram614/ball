class Paper{
    constructor(){
       
        var options = {
            isStatic :true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }

        this.body = Bodies.rectangle(30,590,800,10,options);
        this.width = 800;
        this.height = 10;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position; 
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y,40, 40);
      
    }
 
};
