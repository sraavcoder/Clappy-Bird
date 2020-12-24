var bird;
var pipes = [];
var score = 0;
var gameOver = false;
var Instructions = true;
var gameStart = false;
var j = true;
var x = 180;
let mic;
var clapping = false;

function setup() {
  createCanvas(500, 600);

  mic = new p5.AudioIn();
  mic.start();

  bird = new Bird();
  pipes.push(new Pipe());
  
  sliderTop = createSlider(0, 1, 0.2, 0.01);
  sliderBottom = createSlider(0, 1, 0.35, 0.01);

}
function draw() {

  background(0);
  var micLevel = mic.getLevel();

  if (micLevel > 0.2){
    gameStart = true;
  }
  bird.show();
  if (gameStart == true) {
    j = false;
    bird.move();
    if (frameCount % 75 == 0) {
      pipes.push(new Pipe());
    }
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].move();
      
      if (pipes[i].hits(bird)) {
        pipes[i].speed = 0;
        gameOver = true;
      }
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1)
      }
    }

    fill("white");
    textSize(80);
    text('' + score, 220, 150);
    if (gameOver == true) {
      textSize(15);
      text('GAME OVER!! hope you like the game', 120, 190);
      text('press Ctrl+R to replay the game', 140, 220)
      Instructions = false;
    }
  }
  if (Instructions == true) {
    fill('white');
    textSize(18);
    text('Make your bird fly by Clapping and do not',
         70, 30);
    text('touch the pipes and the top and bottom of the canvas', 30, 60);
  }

  if (j == true) {
    fill('pink');
    textSize(25);
    text('Clap to Start the Game', 110, 90);
  }
  
  var thresholdTop = sliderTop.value();
  var thresholdBottom = sliderBottom.value();
  if(micLevel > thresholdTop && !clapping){
    bird.up();
    clapping = true;
  }
  if(micLevel < thresholdBottom){
    clapping = false;
  }

  fill("#f65c5c");
  var y = map(micLevel, 0, 1, height, 0);
  rect(width - 50, y, 50, height - y)
  
  var ty = map(thresholdTop, 0, 1, height, 0);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(width-50, ty, width, ty);
  
  var by= map(thresholdBottom, 0, 1, height, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  line(width-50, by, width, by);

}
function keyPressed() {
  if (keyCode == 32) {
    bird.up();
  }

}