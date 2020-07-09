class Box {
    constructor(x,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, 610, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
   
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);
     
    }
  };