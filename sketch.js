var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(750, 200, 30, height/2);
  speed = random(55,90);
  weight = random(400,800);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(0); 
  if(car.x-wall.x<=car.width/2+wall.width/2
    &&wall.x-car.x<=car.width/2+wall.width/2
    &&car.y-wall.y<=car.height/2+wall.height/2
    &&wall.y-car.y<=car.height/2+wall.height/2)
    {
     var deformation = (0.5*weight*speed*speed)/22500
       if(deformation<100){
      car.shapeColor = color(0,255,0);
       }
       if(deformation>=100&&deformation<180){
        car.shapeColor = color(230,230,0);
         }
         if(deformation>180){
          car.shapeColor = color(255,0,0);
           }
           car.collide(wall);
     }
     car.collide(wall);
  drawSprites();
}