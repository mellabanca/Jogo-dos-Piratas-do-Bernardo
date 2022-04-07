const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, options;
var paisagem;
var tower, gibraltar;
var blaster, ang;
var cannonProp;


function preload() {
  paisagem = loadImage("./assets/background.gif");
  gibraltar = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 angleMode(DEGREES)
 ang = 20

 blaster = new Torment(180,110,130,100,ang);

 cannonProp = new CannonProp(blaster.x, blaster.y);
 
}

function draw() {
  background(189);
  image(paisagem, 0, 0, 1200, 600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 blaster.show();

 push();
 imageMode(CENTER);
 image(gibraltar, tower.position.x, tower.position.y, 160, 310);
 pop(); 

 cannonProp.show();
   
}

 function keyReleased(){

  if(keyCode === DOWN_ARROW){
    cannonProp.Fire();

  }

 }