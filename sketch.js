var helicopterIMG, helicopterSprite,packageIMG;
var package1,package2,ground,packageBody;
var redBoxSide1,redBoxSide2,redBoxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	package1IMG=loadImage("package.png")
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(800,690,1600,20)
	redBoxSide1=new RedBoxSide(910,575,20,210);
	redBoxSide2=new RedBoxSide(710,575,20,210);
	redBoxSide3=new RedBoxSide(810,670,180,20);
     
	 package1=createSprite(width/2, 200, 50,50);
	 package1.addImage(package1IMG)
	 package1.scale=0.2
	 

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var g={
		isStatic:true,
	    restitution:0.8
  }

	 packageBody = Bodies.rectangle(width/2 ,200, 50 , 50 ,g);
	 World.add(world, packageBody);
	 
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //redBoxSide1.x=redBoxSideBody.position.x
  //redBoxSide1.y=redBoxSideBody.position.y

  //redBoxSide2.x=redBoxSideBody.position.x
  //redBoxSide2.y=redBoxSideBody.position.y

  //redBoxSide3.x=redBoxSideBody.position.x
  //redBoxSide3.y=redBoxSideBody.position.y

  package1.x= packageBody.position.x 
  package1.y= packageBody.position.y 
  ground.display()
  redBoxSide1.display()
  redBoxSide2.display()
  redBoxSide3.display()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}