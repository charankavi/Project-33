class Ground{
    constructor(x,y,w,h,score) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      this.score = score;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,255,255);
      rect(pos.x, pos.y, this.w,this.h);
      text(this.score,pos.x - 20,520)
    }
      }
