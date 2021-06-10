const Body = Matter.Body;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Rubber1 = new Rubber(600, 300, 20 , 20);
    Rubber2 = new Rubber(620, 300, 20 , 20);
    Metal1 = new Metal(700, 200, 40, 80);
    plane = new Plane(600,height,1200,20);
    plane2 = new Plane(1200, height/2, 20, height);
    plane3 = new Plane(0, height/2, 20, height);
    plane4 = new Plane(600,0,1200,20)
    hammer = new Hammer(10,100);
}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    plane2.display();
    plane3.display();
    plane4.display();
    Rubber1.display();
    Rubber2.display();
    Metal1.display();
    hammer.display();
}