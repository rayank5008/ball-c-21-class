const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var groundb,groundt,groundr,groundl
var ball
var button1
var button2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  groundb=new Ground(200,390,400,20)
  groundt=new Ground(200,10,400,20)
  groundl=new Ground(10,200,20,400)
  groundr=new Ground(390,200,20,400)

  var ball_options={
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20, ball_options)
  World.add(world,ball)
  button1=createButton("hforce")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hforce)
  
  button2=createButton("vforce")
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundb.show()
  groundt.show()
  groundl.show()
  groundr.show()
  ellipse(ball.position.x,ball.position.y,20)
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}