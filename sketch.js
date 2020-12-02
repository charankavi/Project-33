var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var wall1,wall2;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10;
var score = 0;
var gamestate = "play";
var timmer = 100;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(40,800,75,10,100);
  ground2 = new Ground(120,800,75,10,100);
  ground3 = new Ground(200,800,75,10,100);
  ground4 = new Ground(280,800,75,10,100);
  ground5 = new Ground(360,800,75,10,500);
  ground6 = new Ground(440,800,75,10,500);
  ground7 = new Ground(520,800,75,10,100);
  ground8 = new Ground(600,800,75,10,100);
  ground9 = new Ground(680,800,75,10,100);
 ground10 = new Ground(760,800,75,10,100);

  wall1 = new Wall(800,400,10,800);
  wall2 = new Wall(0,400,10,800);


  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  if(frameCount % 60 == 0 && gamestate == "play"){
timmer = timmer - 1;
  }

textSize(20)
fill(225 - score * 0.01,score * 0.01,0);
text("Score : " + score ,20,20)

fill(225 - timmer,timmer * 2,0);
text("Time left :" + timmer,650,20)

textSize(25);
fill(225);
text("Press P to start",350,20);




  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground1.display();
   ground2.display();
   ground3.display();
   ground4.display();
   ground5.display();
   ground6.display();
   ground7.display();
   ground8.display();
   ground9.display();
   ground10.display();

   wall1.display();
   wall2.display();

 if(timmer === 0){
   gamestate = "over";
 }

 scoreSystem(ground1,100)

}

function keyPressed(){
  if(keyCode === 80 && gamestate !== "over" ){
    particles.push(new Particle(mouseX,10,10));  
  }
}

function scoreSystem(ground,sco){
var d = dist(ground.body.position.x,ground.body.position.y,particles.body.position.x,particles.body.position.y);
if(d <= 20){
  particles.body.destory();
  score = score + sco
}
}