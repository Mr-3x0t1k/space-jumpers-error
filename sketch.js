var canvas;
var title;
var startButton;
var lvl1, lvl2, lvl3, lvl4;
var ground;
var player, playerAni;

function setup(){
  
  createCanvas(600,400);
  background(255, 255, 0);
  title = createElement("h3");
  title.html("Welcome To Space Jumpers!");
  title.position(200, 100);
  
  startButton = createButton("start");
  startButton.position(300,200);


  startButton.mousePressed(()=>{
    title.hide();
    createLevelButtons();
    background(244, 255, 255);
    startButton.hide();

  });
  
  

}


function draw(){
  background(213, 198, 001);
  drawSprites();
}
function createLevelButtons()
{
  lvl1 = createButton("level1");
  lvl1.position(200, 175);

  lvl2 = createButton("level2");
  lvl2.position(350, 175);

  lvl3 = createButton("level3");
  lvl3.position(200, 225);
  
  lvl4 = createButton("level4");
  lvl4.position(350, 225);

  level1ButtonPressed();
  
}
function level1ButtonPressed()
{
  lvl1.mousePressed(()=>{
    lvl1.hide();
    lvl2.hide();
    lvl3.hide();
    lvl4.hide();
    ground = createSprite(0, 390, 1200, 10);
    player = createSprite(25, 330);
    player.scale = 2;
    player.addAnimation("playerAni", "sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png");
    keyPressed();
  });
  }
  function keyPressed()
  {
    
   
      player.velocityY = 0.8;
      
    
    player.velocityY += 0.8;
    player.collide(ground);

  }

