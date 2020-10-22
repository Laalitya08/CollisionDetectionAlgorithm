var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(600,200,50,80);
  fixedRect.shapeColor = "Yellow";
  
}

function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //1st = right touch, 2nd = left touch, 3rd = down touch, 4th = up touch
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "teal";
  } 
  else { 

    fixedRect.shapeColor = "yellow";

  }

  drawSprites();
}