class Plinko{
    constructor(x, y, r){

        var options={
            isStatic : true
        }

        this.r=r;

        this.body = Bodies.circle(x, y, this.r, options);
        
        
        
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle

        if(plinko1=null)
        {
          plinko.display();
    
          if(plinko.body.position.y >760)
          {
            if(plinko.body.position.x < 300)
            {
              score=score+500;
              plinko=null;
              if(count>= 5) gameState ="end";
            }
          }
    
        }

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        fill(255);
        ellipseMode(RADIUS);
        circle(0, 0, this.r);
        pop();

        
        }
};