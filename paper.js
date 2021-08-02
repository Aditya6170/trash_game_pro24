class Paper {

constructor(x,y,r){
    var options = {
     isStatiic:false,
     friction:0.5,
     restitution:0.6,
     density:1.2

    }
    this.r = r;

 this.body= Bodies.circle(x,y, this.r/2,options);
 
 World.add(world,this.body);

}

display(){

 var pose= this.body.position;
 push()
 translate(pose.x, pose.y);
 rectMode(CENTER)
 strokeWeight(3);
 fill(255,0,255)
 ellipse(0,0,  this.r,  this.r);
 pop();
 
}
}