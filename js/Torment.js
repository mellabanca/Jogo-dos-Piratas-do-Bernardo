class Torment {
    constructor(posX, posY, lar, alt, ang){
        this.x = posX;
        this.y = posY;
        this.l = lar;
        this.a = alt;
        this.ang = ang;
        this.cannon = loadImage("./assets/canon.png");
        this.base = loadImage("./assets/cannonBase.png");
    }
    show(){

        if(keyIsDown(RIGHT_ARROW) && this.ang < 70){
            this.ang += 1;
        }

        if(keyIsDown(LEFT_ARROW) && this.ang > -35){
            this.ang -= 1;
        }

        push();
            translate(this.x,this.y);
            rotate(this.ang);
            imageMode(CENTER);
            image(this.cannon, 0, 0, this.l, this.a);
        pop();

        image(this.base,70,20,200,200);
        noFill();
    }
}