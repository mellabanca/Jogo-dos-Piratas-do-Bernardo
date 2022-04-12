class CannonProp {
    constructor(posX, posY){
        var options = {
            isStatic: true
        }
        this.raio = 30;
        this.corpo = Bodies.circle(posX, posY, this.raio, options);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world, this.corpo);
    }

    show(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
    }

Fire(){

Matter.Body.setStatic(this.corpo, false);
Matter.Body.setVelocity(this.corpo,{x:30,y:-20})

}

    }
