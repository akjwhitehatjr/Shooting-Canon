const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1, ball_2, ball_3;



function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,250,400,20);
    tanker = new Tanker(75, height - 110, 60, 30);

    ball_1 = new Ball(400, 50, 20)
    ball_2 = new Ball(500, 100, 20)
    ball_3 = new Ball(600, 150, 20)
    canonBall = new CanonBall(20, 20);

}
function draw() {
    background(255)
    Matter.Engine.update(engine);
    ground.display()
    ball_2.display()
    ball_1.display()
    ball_3.display();
    canonBall.display();
    tanker.display();
    shot.display();
    
}