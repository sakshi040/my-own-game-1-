class Monster {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':9.99,
          'density':1.0 
      }
      this.Visiblity=225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("monster 2.png")
      World.add(world, this.body);
    }
    display(){

      console.log(this.body.speed)
      if(this.body.speed<11){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }else{
        
        World.remove(world,this.body)
        push ()
        this.Visiblity=this.Visiblity-5
        tint (255,this.Visiblity)
        pop ()
      }
      
    }
     
}

  
