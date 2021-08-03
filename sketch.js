const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var stones = []

function setup()
{
  createCanvas(600,400);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  cliff1 = new Ground(550,150,100,50);
  cliff2 = new Ground(50,150,100,50);
  
  ground = new Ground(200,690,600,20);
  bridge = new Bridge(14,{x:50,y:150});

  jointPoint = new Ground(550,150,100,50);
  Matter.Composite.add(bridge.body,jointPoint);
  link = new Link(bridge, jointPoint);

  for(var i = 0; i <= 3
    ; i++ ){
    var x = random(200,300);
    var y = random(5, 140);
    var stone = new Stone(x, y, 40)
    stones.push(stone); 
  }

  rectMode(CENTER);
  textSize(50)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();

  cliff1.show();
  cliff2.show();
  for(var stone of stones){
    stone.show();
  }


}

