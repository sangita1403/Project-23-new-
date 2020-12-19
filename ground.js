class Ground{
    constructor(x,y,width,height)
    {
      var r={
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,r)
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
    display(){
     var posx = this.body.position.x
     var posy = this.body.position.y
     rectMode(CENTER)
     fill("white")
     rect(posx,posy,this.width,this.height)
    }
}