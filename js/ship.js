class Ship {
    constructor(posX, posY, lar, alt, shipPos, shipAnimation){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.shipPos = shipPos;
        this.imagem = loadImage("./assets/boat.png");
        this.animation = shipAnimation;
        this.speed = 0.05;
        this.quebrou = false;
        World.add(world, this.corpo);
    }

    animate(){
        this.speed += 0.05;
    }

    show(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.shipPos, this.lar, this.alt);
        pop();
    }
    caifora(index){

        this.animation = shipDeathAnimation;
        this.speed = 0.05;
        this.lar = 300;
        this.alt = 300;
        this.quebrou = true;
        
        
    setTimeout(()=>{
    
    Matter.World.remove(world, estaleiro[index].corpo);
    delete estaleiro[index];
    },2000);
    
    }
}