class Paper {
     constructor(x,y,width,height){

     var paper_options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2

     }

     this.body = Bodies.rectangle(x,y,width,height,paper_options);
     this.width = width;
     this.height = height;
     this.image = loadImage("Sprites/paper.4.png");

     World.add(world,this.body);

     }

  display(){   
    push ();      
     var pos = this.body.position;
     translate (pos.x,pos.y);
          imageMode(CENTER);
          fill("red");
          image(this.image,0,0,this.width,this.height);
     pop ();
      
     }
}