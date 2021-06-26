class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.pointB = null;
    }

    display(){
            

            if(this.SlingShot.bodyA) {
                var pointA = this.SlingShot.bodyA.position;
                var pointB = this.pointB;
                push()
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                pop()
              }

        
    }
    
}