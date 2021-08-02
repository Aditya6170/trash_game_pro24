
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,paper,log1,log2,log3;


function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,200,50);
    ground = new Ground(600,height,1200,20);

    log1 = new Log(780,380,20,200);
    log2 = new Log(680,340,100,20);
    log3 = new Log(890,340,100,20);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-50})
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-50,y:10})
  }
  
}

