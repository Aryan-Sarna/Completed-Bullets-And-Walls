var bullet,wall;
var thickness,speed,height;

function setup() {
  createCanvas(1600,400);
speed=random(90,110)
weight=random(25,30)

bullet = createSprite(500,200,30,30)
wall = createSprite(1200,200,80,100)

bullet.velocityX = speed;

thickness=random(22,83)


}

function draw() {
background("black")

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)/22509

if(damage>10)
{
wall.shapeColor=color("cyan ")
}

if(damage<10)
{
  wall.shapeColor=color("red");
}
}



drawSprites();

hasCollided(bullet,wall);
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallleftEdge=lwall.x;
if (bulletRightEdge>=wallleftEdge)
{
  return true
}
  return false


}