var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = "green";


  movingRect = createSprite(400, 500, 80, 50);
  movingRect.shapeColor = "green";
  

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(0); 
 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  drawSprites();
}
  