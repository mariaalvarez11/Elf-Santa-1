
function preload() {
  bgImg = loadImage("background.jpg");
  cloudImg = loadImage("cloud.png");
  gift1Img = loadImage("gift1.png");
  gift2Img = loadImage("gift2.png");
  gift3Img = loadImage("gift3.png");
  sleighAndElfImg = loadImage("sleighandelf.png");
}

function setup() {
  createCanvas(500, 400);
  
  bg = createSprite(250,200);
  bg.addImage(bgImg);
  bg.scale = 0.4;

  bg.velocityX = 3;
  
  elf = createSprite(450,135);
  elf.addImage(sleighAndElfImg);
  elf.scale = 0.8;
}

function draw() {
  background(150);

  if(bg.x > 400){
    bg.x = 250;
  }

  if(keyDown(UP_ARROW)) {
    elf.velocityY = -7;
  }

  elf.velocityY = elf.velocityY + 0.5

  if(keyDown(LEFT_ARROW)) {
    elf.velocityX = -2;
  }

  if(keyDown(RIGHT_ARROW)) {
    elf.velocityX = 2;
  }

  if(keyDown("SPACE")) {
    spawnGift()
  }

  drawSprites();
}

function spawnGift() {
  gift = createSprite(elf.x,elf.y);
  number = Math.round(random(1,3));
  switch(number) {
    case 1: gift.addImage(gift1Img);
            break;
    case 2: gift.addImage(gift2Img);
            break;
    case 3: gift.addImage(gift3Img);
            break;
  }
  gift.velocityY = 3;
  gift.scale = 0.1;
}