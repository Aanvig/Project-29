const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot, ground, polygon;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  

  ground =new Ground(540, 280, 250, 10)

  box1 = new Box(238,125,30,40)
  box2 = new Box(254,125,30,40)
  box3 = new Box(270,125,30,40)
  box4 = new Box(286,125,30,40)
  box5 = new Box(302,125,30,40)

  box6 = new Box(254,104,30,40)
  box7 = new Box(270,104,30,40)
  box8 = new Box(286,104,30,40)

  box9 = new Box(270,83,30,40)

  polygon = new Polygon(150,200,30)

  slingshot = new SlingShot(this.polygon,{x:100, y:200})

  
  
  Engine.run(engine);

}

function draw() {
  background("gray");

  
  ground.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()

  slingshot.display()
  polygon.display()

  

  


  drawSprites();
}

function mouseDragged(){
  Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

