var object;

function setup() {
  createCanvas(400, 400);
   object = createSprite(200,200,25,25)
  object.shapeColor = "white"
}

function draw() {
  background(20);
  drawSprites()
if (keyDown("down")){
  object.y = object.y +3
}
if (keyDown("up")){
  object.y = object.y -3
}
if (keyDown("right")){
  object.x = object.x +3
}
if (keyDown("left")){
  object.x = object.x -3
}
}

