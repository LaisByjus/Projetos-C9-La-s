var box;
function setup() {
  createCanvas(600,600);
  
}

function draw() {
// background(30);

box=createSprite(300,300,10,10);
box.shapeColor = "purple";

if(keyDown("up")){
  box.y = box.y -2;
}
if(keyDown("dwon")){ 
  box.y=box.y+2;
}
if(keyDown("left")){
  box.x=box.x-2;
}
if(keyDown("rigth")){
  box.x=box.x+2
}
if(keyDown("right")){
 background("red");
}else{
  background("pink"); 
}
drawSprites();
} 





