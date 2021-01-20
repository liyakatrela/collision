function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  bat=createSprite(380,180,40,40)
  ball.shapeColor="pink"
  bat.shapeColor="blue"
}


function draw() {
  background(255,255,255);  
  ball.x=mouseX
  ball.y=mouseY
  if(ball.x-bat.x<bat.width/2+ball.width/2
    &&bat.x-ball.x<bat.width/2+ball.width/2
    &&ball.y-bat.y<bat.height/2+ball.height/2
    &&bat.y-ball.y<bat.height/2+ball.height/2){
      ball.shapeColor="black"
      bat.shapeColor="red"
    }
    else{
      ball.shapeColor="pink"
      bat.shapeColor="blue"
    }
  drawSprites();
}