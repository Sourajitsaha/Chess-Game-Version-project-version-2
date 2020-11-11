class GPawn {

    constructor(color, index){
        this.color = color;
        this.index = index;
        this.imagewhite = loadImage("images/whitepawn.png");
        this.imageblack= loadImage("images/blackpawn.png");
        if(color === "white"){
            this.obj = createSprite((75 + (this.index*100)), 175, 50, 50);
            this.obj.addImage("whitepawn",this.imagewhite);
            this.obj.scale = 0.5;
        } else{
            this.obj = createSprite((75 + (this.index*100)), 675, 50, 50);
            this.obj.addImage("blackpawn",this.imageblack);
        }
       
    }

    display(){
        rectMode(CENTER);
        this.obj.scale = 0.5;
       
    }

}