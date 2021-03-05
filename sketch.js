var garden,gardenImage;
var cat, mouse,catAnim1,catAnim2,catAnim3,mouseAnim1,mouseAnim2,mouseAnim3;
function preload() {
    //load the images here
    gardenImage=loadImage("garden.png")
    catAnim1=loadAnimation("cat1.png")
    catAnim2=loadAnimation("cat2.png","cat2.png","cat3.png")
    catAnim3=loadAnimation("cat4.png")
    mouseAnim1=loadAnimation("mouse1.png")
    mouseAnim2=loadAnimation("mouse2.png","mouse2.png","mouse3.png")
    mouseAnim3=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage(gardenImage);
    garden.scale=1.15;
    cat=createSprite(730,650)
    cat.addAnimation("sitting tom",catAnim1)
    cat.scale=0.2
    cat.addAnimation("walking tom",catAnim2)
    cat.addAnimation("glad tom",catAnim3)
    mouse=createSprite(200,650)
    mouse.addAnimation("glad jerry",mouseAnim1)
    mouse.scale=0.15
    mouse.addAnimation("playful jerry",mouseAnim2)
    mouse.addAnimation("found jerry",mouseAnim3)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
    fill("white")
    text(World.mouseX+","+World.mouseY,World.mouseX,World.mouseY)
    if(cat.x-mouse.x<cat.width/2+mouse.width/2-130
        && mouse.x-cat.x<=cat.width/2+mouse.width/2-130){
          cat.velocityX=0;
          cat.x=330;
          cat.changeAnimation("glad tom")
          mouse.changeAnimation("found jerry")
    }
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.changeAnimation("walking tom");
    cat.scale=0.3
    cat.velocityX=-2;
    mouse.changeAnimation("playful jerry");
  }

}
