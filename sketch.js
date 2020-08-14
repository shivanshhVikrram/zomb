var bg;
var cloudImage1,cloudImage2,cloudImage3;
var playerIdle,playerJump;
var player;
var platformImg;
var treeImg;
var playerThrow;
var jumpThrow;
var kImg
var enemyDead,enemyAttack;
var pt1;
var playerRun;
var playerDead;
function preload(){
  bg = loadImage("BG.png");
  cloudImage1 = loadImage("cloud1.png");
  cloudImage2 = loadImage("cloud2.png");
  cloudImage3 = loadImage("cloud3.png");
  playerIdle = loadAnimation("idle.png");
  playerJump = loadAnimation("jump.png","jump1.png","jump2.png","jump6.png","jump7.png","jump9.png");
  platformImg = loadImage("platform1.png");
  treeImg = loadImage("tree1.png");
  playerThrow = loadAnimation("Throw__000.png","Throw__002.png","Throw__005.png");
  jumpThrow = loadAnimation("Jump_Throw__001.png","jump_Throw__006.png","Jump_Throw__009.png");
  kImg = loadImage("Kunai.png");
  enemyAttack = loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png");
  enemyDead = loadAnimation("dead4.png");
 // enemyDead = loadAnimation("dead1.png","dead2.png","dead3.png","dead4.png","dead5.png");
  pt1 = loadImage("pt1.png");
  playerRun = ("Run__000.png","Run__001.png","Run__002.png","Run__003.png","Run__004.png","Run__005.png","Run__006.png","Run__007.png","Run__008.png","Run__009.png");
  playerDead = ("Dead__000.png","Dead__001.png","Dead__002.png","Dead__003.png","Dead__005.png","Dead__006.png");
}
function setup() {
  createCanvas(displayWidth,600);
 // createSprite(400, 200, 50, 50);
 ground = createSprite(displayWidth/2,590,displayWidth,10);
 player = createSprite(100,580);
 player.addAnimation("player1",playerIdle);
 player.addAnimation("player2",playerJump);
 player.addAnimation("player3",playerThrow);
 player.addAnimation("player4",jumpThrow);
 player.addAnimation("player5",playerRun);
 player.addAnimation("player6",playerDead);
 player.scale = 0.3;
 platform = createSprite (displayWidth-400,500);
 platform.addImage(platformImg);
tree = createSprite(displayWidth-400,200);
tree.addImage(treeImg);
enemy = createSprite(550,525);
enemy.addAnimation("enemy2",enemyAttack);
enemy.addAnimation("enemy3",enemyDead);
enemy.velocityX = -2;
enemy.scale = 0.3;

pt = createSprite(350,270);
pt.addImage(pt1);


}

function draw() {
  background(bg);
  player.collide(platform);
  image(treeImg,displayWidth-400,400);
  text(player.y,500,100)
  if (frameCount%250===0) {
    spawnClouds();

  } 
  if (keyWentDown(UP_ARROW)&& player.y>=319){
    player.changeAnimation("player2");
    player.velocityY = -20
  }
  player.velocityY += 0.8

  if (keyWentDown(RIGHT_ARROW)){
    player.changeAnimation("player2");
    player.velocityX = 3
  }
  if (keyWentUp(RIGHT_ARROW)){
    player.changeAnimation("player1");
    player.velocityX = 0
  }

  if (keyWentDown(LEFT_ARROW)){
    player.changeAnimation("player2");
    player.velocityX = -3
  }

  if (keyWentUp(LEFT_ARROW)){
    player.changeAnimation("player1");
    player.velocityX = 0
  }

  if (keyWentDown("T")){
    player.changeAnimation("player3");
    var Kunai = createSprite(player.x,player.y);
    Kunai.velocityX = 5
    Kunai.scale = 0.5
    Kunai.addImage(kImg);
    if (Kunai.isTouching(enemy)) {
      enemy.changeAnimation("enemy3")
      enemy.velocityX = 0
    }
  }

  if (keyWentUp("T")){
    player.changeAnimation("player1");
  }
  player.collide(ground);
  player.collide(pt);
  if(player.isTouching(enemy)){
    player.changeAnimation("player6");
  }
  drawSprites();
}
function spawnClouds(){
  var cloud = createSprite(displayWidth,random(50,250));
  var rand = Math.round(random(1,3));
  switch(rand ){
    case 1:
      cloud.addImage(cloudImage1);
      break;

      case 2:
        cloud.addImage(cloudImage2);
        break;

        case 3:
          cloud.addImage(cloudImage3);
          break;





  }
  cloud.lifetime = 500;
  cloud.velocityX = -3;
  cloud.scale = 0.1
}
function spawnEnemies(){
  
}