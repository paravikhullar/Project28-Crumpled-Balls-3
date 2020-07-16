var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 
	 paperBall = new Paper(100,0,70);

	 ground = new Ground(600,390,1200,20);
	 launcher = new Launcher(paperBall.body, {x:100, y:100});

	  //creating a box
	 
	  var boxRight_options={
		isStatic:true
	}

   boxRight= Bodies.rectangle(1000,330,20,100,boxRight_options);
   World.add(world,boxRight); 

	var boxLeft_options={
	   isStatic:true
   }

   boxLeft= Bodies.rectangle(800,330,20,100,boxLeft_options);
   World.add(world,boxLeft); 

  var boxBottom_options = {
	   isStatic:true
   }

   boxBottom = Bodies.rectangle(900,370,100,10, boxBottom_options);
   World.add(world,boxBottom);

    


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

 rectMode(CENTER);
  background(250);

  ground.display();
  paperBall.display();
  strokeWeight(3);
  launcher.display();

  fill(0);
  noStroke();

  

  rect(boxRight.position.x, boxRight.position.y , 20, 100);
  rect(boxLeft.position.x,boxLeft.position.y, 20,100);
  rect(boxBottom.position.x,boxBottom.position.y, 200,20);

  imageMode(CENTER);
  image(dustbinImg, 900,300,250,150);


  drawSprites();
 
}

// function keyPressed(){

// 	if (keyCode === UP_ARROW){
// 		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:25 , y:-45});
// 	}
// }

function mouseDragged(){

    Matter.Body.setPosition(paperBall.body, {x:mouseX, y:mouseY} );
}

function mouseReleased(){

    launcher.sling.bodyA = null;
}

