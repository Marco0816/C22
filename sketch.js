const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  //creating the ball
  var ball_options={
    restitution:1.2
  };
  ball= Bodies.circle(200,50,30,ball_options);
  ball2= Bodies.circle(200,160,30,ball_options);
  World.add(world,ball2);
  World.add(world,ball);

  cons= Matter.Constraint.create({
      pointA:{x:200,y:20},
      bodyB:ball,
      pointB:{x:0,y:0},
      length:160,
      stiffness: 0.7
    });

  World.add(world,cons);

  cons2= Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:100,
    stiffness: 1
  });

  World.add(world,cons2);

}
function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);

  strokeWeight(3);//thickness of  aline
  stroke(255);//linecolor
  line(cons.pointA.x,cons.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
}
function keyPressed(){
  if(keyCode== RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}
