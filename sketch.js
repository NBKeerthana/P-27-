const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,200,250,20);

	bob1 = new Bob(520,400,20);
	bob2 = new Bob(560,400,20);
	bob3 = new Bob(600,400,20);
	bob4 = new Bob(640,400,20);
	bob5 = new Bob(680,400,20); 

	rope1 = new Rope(bob1.body,roof.body,-40*2 , 0);
	rope2 = new Rope(bob2.body,roof.body,-20*2,0);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	rope4 = new Rope(bob4.body,roof.body,20*2,0);
	rope5 = new Rope(bob5.body,roof.body,40*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob5.body.position,{x:60,y:0});
  
	}
}