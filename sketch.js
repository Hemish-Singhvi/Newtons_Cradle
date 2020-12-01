
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof, br1, br2, br3, br4, br5;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	roof = new Roof(400, 150, 250, 20);
	bob1 = new Bob(400, 350, 20);
	bob2 = new Bob(450, 350, 20);
  bob3 = new Bob(500, 350, 20);
	bob4 = new Bob(350, 350, 20);
	bob5 = new Bob(300, 350, 20);
	br1 = new Rope(bob1.body, roof.body, 0, 0);
	br2 = new Rope(bob2.body, roof.body, 50, 0);
	br3 = new Rope(bob3.body, roof.body, 100, 0);
	br4 = new Rope(bob4.body, roof.body, -50, 0);
  br5 = new Rope(bob5.body, roof.body, -100, 0);
  engine.world.gravity.y = 1;
}


function draw() {
  rectMode(CENTER);
  background(200);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  br1.display();
  br2.display();
  br3.display();
  br4.display();
  br5.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
  if (keyWentDown("up")){
  Matter.Body.applyForce(bob3.body, bob3.body.position, {x:100, y:-20});
  }
}

