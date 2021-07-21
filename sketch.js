function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var astronaut
}

function preload(){
bg = loadImage("images/iss.png")
sleep = loadAnimation("images/sleep.pmg")
brush = loadAnimation("images/brush.png")
gym = loadAnimation("images.gym21.png","images/gym22.png")
eat = loadAnimation("")
drink = loadAnimation("")
move = loadAnimation("")


}

function draw() {
  background(255,255,255);  
  background.addImage("images/iss.png")

  astronaut.bounceOff(edges)

  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1

  if(KeyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(KeyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(KeyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

    if(KeyDown("RIGHT_ARROW")){
      astronaut.addAnimation("drinking",drink)
      astronaut.changeAnimation("drinking")
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

   if(KeyDown("m")){
     astronaut.velocityX = 1
     astronaut.velocityY = 1
   }

  }
   
  Text("down arrow = gym",750,390)
  Text("up arrow = brushing",750,370)
  Text("left arrow = eat ",750,350)
  Text("right arrow = drink ",750,330)

  createEdges();

  drawSprites();
}