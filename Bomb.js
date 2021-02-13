class Bomb{
    constructor(x,y,r){
var options={
    restitution:0.4
}
this.r=r
this.body=Bodies.circle(x,y,this.r,options)
this.image=loadImage("bomb.png")
this.Visiblity=255;
World.add(world,this.body)

    }
    display(){
        console.log(this.body.speed)
      if(this.body.speed<11){
        var pos=this.body.position
        var angle=this.body.angle

        push ()
        translate (pos.x,pos.y)
        fill ("black")
        rotate (angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop ()
    }else{
        
        World.remove(world,this.body)
        push ()
        this.Visiblity=this.Visiblity-5
        tint (800,this.Visiblity)
        pop ()
    }
}
}