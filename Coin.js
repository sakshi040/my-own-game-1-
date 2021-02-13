class Coin{
    constructor(x,y,r){
var options={
    restitution:0.4
}
this.r=r
this.body=Bodies.circle(x,y,this.r,options)
this.image=loadImage("coin.png")
World.add(world,this.body)

    }
    display(){
        console.log(this.body.speed)
      if(this.body.speed<11){
        var pos=this.body.position
        var angle=this.body.angle

        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop ()
    }else{
        
        World.remove(world,this.body)
        push ()
        this.Visiblity=this.Visiblity-5
        tint (255,this.Visiblity)
        pop ()
    }
}
}