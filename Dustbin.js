class Dustbin {
     constructor(x,y,width,height){
     var options = {
          isStatic : true
     }

     this.width=width;
     this.height=height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("Sprites/dustbin.4.png");
    
    
     World.add(world,this.body);

}

display(){
   
     var dustpos = this.body.position;
  push ();
     translate (dustpos.x,dustpos.y);
     imageMode(CENTER);
     fill("blue");
     image(this.image,0,0,this.width,this.height);
  pop ();
   
}

}