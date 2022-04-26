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

var estaleiro = []

var shipDeathAnimation = []
var shipSpriteDeathData, shipSpriteDeathsheet;

var shipAnimation = [];
var shipSpritedata, shipSpritesheet;

var cannonballAnimation = []
var cannonballdata, cannonballsheet;

var gameOver = false;

function preload() {
  paisagem = loadImage("./assets/background.gif");
  gibraltar = loadImage("./assets/tower.png");
  shipSpritedata = loadJSON("./assets/boat/boat.json");
  shipSpritesheet = loadImage("./assets/boat/boat.png");

  shipSpriteDeathData = loadJSON("./assets/boat/brokenBoat.json");
  shipSpriteDeathsheet = loadImage("./assets/boat/brokenBoat.png");

  cannonballdata = loadJSON("./assets/waterSplash/waterSplash.json");
  cannonballsheet = loadImage("./assets/waterSplash/waterSplash.png");
  
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

 var shipFrames = shipSpritedata.frames;

 for(var i = 0; i < shipFrames.length; i++){
   var pos = shipFrames[i].position;
   var img = shipSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
   shipAnimation.push(img);
 }
 
 var deathFrames = shipSpriteDeathData.frames;

 for(var i = 0; i < deathFrames.length; i ++){

  var pos = deathFrames[i].position;
  var img = shipSpriteDeathsheet.get(pos.x, pos.y, pos.w, pos.h);
  shipDeathAnimation.push(img);

 }

 var ballframes = cannonballdata.frames;

 for(var i = 0; i < ballframes.length; i ++){

  var pos = ballframes[i].position;
  var img = cannonballsheet.get(pos.x, pos.y, pos.w, pos.h);
  cannonballAnimation.push(img);

 }
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
  verifyScan(i);
 }

 showShips();
   
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
  cannonProp.animate();
  if(cannonProp.corpo.position.x >= width || cannonProp.corpo.position.y >= height  -50){

    cannonProp.caifora(i);
  }
 }

 }

 function showShips(){

  if(estaleiro.length > 0){

    if(estaleiro[estaleiro.length - 1] === undefined ||
       estaleiro[estaleiro.length - 1].corpo.position.x < width - 300){

      var positions = [-40,-60,-70,-20];
      var position = random(positions);
      var ship = new Ship(width,height - 100, 170, 170, position, shipAnimation);
      estaleiro.push(ship);
    }

    for(var i = 0; i < estaleiro.length; i ++){

      if(estaleiro[i]){

        Matter.Body.setVelocity(estaleiro[i].corpo, {x: -0.9, y: 0});
        estaleiro[i].show();
        estaleiro[i].animate();
        var bateu = Matter.SAT.collides(tower, estaleiro[i].corpo);
        if(bateu.collided && !estaleiro[i].quebrou){
          gameOver = true;
          deuRuim();
        }
    }
   }
  } else{

  var ship = new Ship(width-79, height-60, 170, 170, -80, shipAnimation);
  estaleiro.push(ship);
  }

 }


function verifyScan(index){

  for(var i = 0; i < estaleiro.length; i ++){

   if(Municao[index] !== undefined && estaleiro[i] !== undefined){
    var bateu = Matter.SAT.collides(Municao[index].corpo, estaleiro[i].corpo);
    if(bateu.collided){

      estaleiro[i].caifora(i);
      Matter.World.remove(world, Municao[index].corpo);
      delete Municao[index];
    }
   }
  }
}

function deuRuim(){
  swal({
    title: "Você jogou muito mal!",
    text: "Melhor desistir!",
    imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
    imageSize: "150x150",
    confirmButtonText: "Não desistiu?"
  },
  function(isConfirm){
    if(isConfirm){
      location.reload();
    }
  }
  );
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