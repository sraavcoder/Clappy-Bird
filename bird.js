function Bird(){
    this.y = height/2;
    this.x = 40;
    this.fly = -10;
    this.gravity = 0.9;
    this.velocity = 0;
    this.colorChange = false;
    this.colorChange2 = false;

 
    

    this.show = function(){
        fill("yellow");
        if(this.colorChange == true){
          fill("red");
        }
        if(this.colorChange2 == true){
            fill("yellow");
          }
        ellipse(this.x,this.y,40,40);
    }
    this.up = function(){
       this.velocity += this.fly; 
       this.velocity *= 0.9;
    }
    this.freeze = function(){
        this.velocity = 0;
        this.gravity = 0;
        this.fly = 0;
    }
    this.move = function(){
        if(this.y > height-10){
         this.velocity = 0;
        this.y = height-15;
        // this.colorChange = true;
        // gameOver = true;
        }
        if(this.y < 10){
               this.velocity = 0;
               this.y = 15
               // this.colorChange = true;
               // gameOver = true;
        }
        if(this.y < height && this.y > 0){
       this.velocity += this.gravity;
       this.y +=this.velocity;
        }
            
        
     
    }
}