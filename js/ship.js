class Ship {
    constructor(posX, posY, lar, alt, shipPos){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.shipPos = shipPos;
        this.imagem = loadImage("./assets/boat.png");
        World.add(world, this.corpo);
    }

    show(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.imagem, 0, this.shipPos, this.lar, this.alt);
        pop();
    }
}