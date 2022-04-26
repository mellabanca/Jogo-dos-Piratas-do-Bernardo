class CannonProp {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.raio = 30;
        this.corpo = Bodies.circle(posX, posY, this.raio, options);
        this.imagem = loadImage("./assets/cannonball.png");
        this.rastro = [];
        this.speed = 0.05;
        this.animation = [this.imagem];
        this.afundou = false;
        World.add(world, this.corpo);
    }

    animate(){
        this.speed += 0.05;
    }

    show(){
        var pos = this.corpo.position;
        var index = floor(this.speed % this.animation.length);
        push();
        imageMode(CENTER);
        image(this.animation[index], pos.x, pos.y, this.raio, this.raio);
        pop();
        if(this.corpo.velocity.x > 0 && pos.x > 10 && !this.afundou){
            var matis = [pos.x,pos.y];
            this.rastro.push(matis);
    }
for (var i = 0; i < this.rastro.length; i ++){

    image(this.imagem,this.rastro[i][0], this.rastro[i][1], 5,5);
 }
}
Fire(){

    var newAngle = blaster.ang - 28;
    newAngle = newAngle*(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.corpo, false);
    Matter.Body.setVelocity(this.corpo, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});
}

caifora(index){

    this.animation = cannonballAnimation;
    this.speed = 0.05;
    this.raio = 150;
    this.afundou = true;

    Matter.Body.setVelocity(this.corpo,{x:0,y:0});
setTimeout(()=>{

Matter.World.remove(world, this.corpo);
delete Municao[index];
},1000);

}
    
}

    
