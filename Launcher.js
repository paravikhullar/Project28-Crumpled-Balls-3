class Launcher{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.002,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){

        if (this.sling.bodyA == true){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        stroke("black");
        console.log("A.x:" + pointA.x + "A.y:" + pointA.y +"B.x:" + pointB.x + "B.y:" + pointB.y);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}