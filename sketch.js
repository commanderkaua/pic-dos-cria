var path,boy, leftBoundary,rightBoundary;
var pathImg,boy_correndo;


function preload(){
  pathImg = loadImage("path.png");
  boy_correndo = loadAnimation("jake4.PNG", "Jake1.png", "jake3.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200,200,400); 
 path.addImage("rua",pathImg);
 path.velocityY=6;
path.scale=1.2;

boy = createSprite(200,350,10,10);
boy.addAnimation("correndo",boy_correndo);
boy.scale=1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
