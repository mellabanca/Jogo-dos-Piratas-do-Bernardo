const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Municao = []

var engine, world, ground, options;
var paisagem;
var tower, gibraltar;
var blaster, ang;
var cannonProp;
var ship;


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

 ship = new Ship(width-79, height-60, 170, 170, -80);
 
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

 for(var i = 0; i < Municao.length; i ++){

  hud(Municao[i],i);
 }

 Matter.Body.setVelocity(ship.corpo, {x: -0.9, y: 0});
 ship.show();
   
}

 function keyReleased(){

  if(keyCode === DOWN_ARROW){
    Municao[Municao.length - 1].Fire();
    
  }

 }

 function keyPressed(){

  if(keyCode === DOWN_ARROW){
    var cannonProp = new CannonProp(blaster.x, blaster.y);
    Municao.push(cannonProp);
  }

 }

 function hud(cannonProp,i){

 if(cannonProp){
  cannonProp.show();
 }

 }

 //Revisão de matrizes
 var matriz1 = [25,32,1,49,86];
 //console.log(matriz1);

 var matriz2 = [26, "Bernardo", true];
 //console.log(matriz2[2]);

 var matriz3 = [matriz1, matriz2];
 //console.log(matriz3[0][4]);

 matriz1.push(5);
 //console.log(matriz1);

 matriz1.pop();
 //console.log(matriz1);