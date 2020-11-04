
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground
var bananaGroup, obstacleGroup
var survivalTime = 0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time: "+ survivalTime, 160, 50);
  
  if(keyDown("space")&& monkey.y >= 200) {
    monkey.velocityY = -10;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  food();
  rock();
  monkey.collide(ground);
  
  drawSprites();
}     

function food() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(500,200,10,40);
    banana.velocityX = -6;
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.lifetime = 78;
    //add each obstacle to the group
    bananaGroup.add(banana);
  }
}

function rock() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(500,330,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 78;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}