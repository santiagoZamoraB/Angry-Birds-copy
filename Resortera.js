class Resortera{
  
  constructor(){
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
  }
  display(){
   image(this.sling1,200,15);
   image(this.sling2,170,15);
  }
}