var wall,thikness;
var speed,weight,bullet;

function setup() {
  createCanvas(800,400);

  thicknes=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(780,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0);  
    
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage>10)
{

  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{

wall.shapeColor=color(0,255,0);
}
  drawSprites();

}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{ 
return true

}
return false;
}









