var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg; 
var redLeaf, redleafImg;
var orangeLeaf, orangeleafImg;
var select_sprites;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  redleafImg = loadImage("redImage.png")
  orangeleafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges = createEdgeSprites();
  
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  
  drawSprites();
  
  var select_sprites = Math.round(random(1,3)) ; 
  
  
 if (frameCount % 80 == 0){
    if(select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createLeaf();
    }

}

function createLeaf() {
  var redLeaf=createSprite(random(100,200),80,10,10); 
  redLeaf.velocityY = 2;
  redLeaf.addImage(redleafImg); 
  redLeaf.scale = 0.05;
  redLeaf.lifetime = 100;
}   


function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale = 0.05
  apple.velocityY = 3
  apple.lifetime = 100 
}
}








