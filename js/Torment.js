class Torment {
    constructor(posX, posY, lar, alt, ang){
        this.x = posX;
        this.y = posY;
        this.l = lar;
        this.a = alt;
        this.an = ang;
        this.cannon = loadImage("./assets/canon.png");
        this.base = loadImage("./assets/cannonBase.png");
    }
    show(){
        push();

            imageMode(CENTER);
            image(this.cannon,this.x, this.y, this.l, this.a);
        pop();

        image(this.base,70,20,200,200);
        noFill();
    }
}