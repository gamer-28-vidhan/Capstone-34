const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    ball = new Ball(660,200,30)

    rope = new Rope(ball.body,{x:660, y:50})

    box1 = new Building(800,100,70,70)
    box2 = new Building(800,100,70,70)
    box3 = new Building(800,100,70,70)
    box4 = new Building(800,100,70,70)
    box5 = new Building(800,100,70,70)
    box6 = new Building(870,100,70,70)
    box7 = new Building(870,100,70,70)
    box8 = new Building(870,100,70,70)
    box9 = new Building(870,100,70,70)
    box10 = new Building(870,100,70,70)
   

    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    
    

      
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}


function mouseReleased(){
}




