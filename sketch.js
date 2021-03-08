
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dusbin1, dustbin2,dustbin3,ball,ground,paper;
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,height,1300,20);
	dustbin1 = new Dustbin(650,690,300,30);
	dustbin2 = new Dustbin(550,650,20,100);
	dustbin3 = new Dustbin(700,630,30,200);

	paper = new Paper(100,550,90);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	


	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,40);
  
  drawSprites();
   
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});


	}
}

