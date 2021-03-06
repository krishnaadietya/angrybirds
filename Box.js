class box{
    constructor(x,y,width,height){
        var options ={
            'restitution' :1.0,
            'density': 1.0,
            'friction':1.0
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        Fill(255);
        rect(0,0,this.width,this.height);
        Pop();
    }
};