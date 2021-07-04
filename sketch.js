const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas 
var bg
function preload(){
    // preload function 
bg=loadImage("background.jpg")
}
function setup(){
 createCanvas(1200,400);
 

    engine = Engine.create();
    world = engine.world;

// make the bodies 
hexa = new HEX(200,200)
slingshot = new SlingShot(hexa.body,{x:200, y:200});
stage1 = new stage(400,300,150,40) 
stage2 = new stage(800,150,150,40)
block1= new block(400,250)
block2= new block(350,250)
block3= new block(450,250)
block4= new block(425,300)


}
function draw(){
    Engine.update(engine);
    background(bg)
    hexa.display()
    slingshot.display()
    stage1.display()
    stage2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
}

function mouseDragged(){
    Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
    slingshot.fly();


}


function keyPressed(){
    if(keyCode===32)
    slingshot.attach(hexa.body);
}