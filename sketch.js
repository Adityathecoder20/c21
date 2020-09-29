var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(800,200,60,height);
  car=createSprite(50,200,50,50);
  car.shapeColor="red";
  wall.shapeColor="yellow";

  car.velocityX = speed;
}

function draw() {
  background("violet");  
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var d=0.5*weight*speed*speed/22509;
    if(d>180)
    {
      car.shapeColor="blue";
    }
    if(d<100)
    {
      car.shapeColor="black";
    }
    if(d<180 && d>100)
    {
      car.shapeColor="green";
    }
  }
}