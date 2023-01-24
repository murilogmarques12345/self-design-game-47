var pathImg, path, book, bookG
var player, playerImg, bookImg
var score = 0;
var life = 0;

function preload(){
  pathImg = loadImage("Road.png")
  playerImg = loadAnimation("Runner-1.png","Runner-2.png")
  bookImg = loadImage("book.png")
}

function setup(){
  createCanvas(400,600)
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;

  player = createSprite(70,580,20,20);
  player.addAnimation("MaleRunning",playerImg);
  player.scale=0.08;

  bookG=new Group()
}

function draw(){
  // background("white")
  drawSprites()
  if(path.y > 400 ){
    path.y = height/2;
  }

  player.x = World.mouseX;
  createBook()

  edges = createEdgeSprites();
  player.collide(edges);

  if (bookG.isTouching(player)) {
    bookG.destroyEach();
    life = life+15;
    score=score+25;
  }
  showLife()

  textSize(20);
  fill(255);
  text("score: "+ score,10,30);
}

function createBook(){
    if (World.frameCount % 200 == 0) {
        var book = createSprite(Math.round(random(50, 350),40, 10, 10));
        book.addImage(bookImg);
        book.scale=0.12;
        book.velocityY = 3;
        book.lifetime = 150;
        bookG.add(book);
        }
}

function showLife() {
  push();
  // image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
  fill("white");
  rect(200, 30, 150, 20);
  fill("black");
  rect(200, 30, life, 20);
  noStroke();
  pop();
}
