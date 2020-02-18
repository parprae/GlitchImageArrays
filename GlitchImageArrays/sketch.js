/*
  Glitch Image Arrays
  by Kara Ngamsopee

  Press number 1-5 to change image.
  Press space bar to go back to original image.
  Click/move your mouse to display texts and shapes.
*/

var state; // Declare variable 'img'.
var stateStatic = 0;
var stateOne = 1;
var stateTwo = 2;
var stateThree = 3;
var stateFour = 4;
var stateFive = 5;
let imgStatic;
let img1;
let img2;
let img3;
let img4;
let img5;


// preload() will execture before setup()
function preload() {
  imgStatic = loadImage('assets/image1.jpg'); // Load static image
  img1 = loadImage('assets/image2.jpg');
  img2 = loadImage('assets/image3.jpg');
  img3 = loadImage('assets/image4.jpg');
  img4 = loadImage('assets/image5.jpg');
  img5 = loadImage('assets/image6.jpg');
}

function setup() {
  imageMode(CENTER);
  createCanvas(1024, 800);
  state = stateStatic;
}

function draw() {
  if(state == stateStatic) {
    background(163, 227, 255);
    drawStatic();
  }
  else if(state == stateOne) {
    background(255, 207, 228);
    drawOne();
  }
  else if(state == stateTwo) {
    background(207, 255, 212);
    drawTwo();
  }
  else if(state == stateThree) {
    background(255, 241, 153);
    drawThree();
  }
  else if(state == stateFour) {
    background(255, 212, 181);
    drawFour();
  }
  else if(state == stateFive) {
    background(245, 219, 255)
    drawFive();
  }
}

function drawStatic() {
    image(imgStatic, width/2, height/2, mouseX, mouseY);
  }

function drawOne() {
  image(img1, width/2,height/2);

  if (mouseIsPressed) {
    textSize(32);
    text('herro :)', mouseX, mouseY);
    fill(255);
  }
}

function drawTwo() {
  image(img2, width/2,height/2);

  if (mouseIsPressed) {
    noStroke();
    fill(255, 247, 194);
    ellipse(200, 362, 15, 15);

    noStroke();
    fill(255, 194, 214);
    ellipse(300, 568, 15, 15);

    noStroke();
    fill(203, 240, 242);
    ellipse(400, 218, 15, 15);

    noStroke();
    fill(203, 240, 242);
    ellipse(500, 238, 15, 15);

    noStroke();
    fill(255, 247, 194);
    ellipse(620, 180, 15, 15);

    noStroke();
    fill(255, 194, 214);
    ellipse(789, 450, 15, 15);
  }
}
function drawThree() {
  image(img3, width/2,height/2);
  if (mouseIsPressed) {
    textSize(32);
    text('vietnam', mouseX, mouseY);
    fill(random(255), random(255), random(255));
  }
}
function drawFour() {
  if (mouseIsPressed) {
    background(random(255), random(255), random(255));
  }
  image(img4, width/2,height/2);
}
function drawFive() {
  image(img5, mouseX, mouseY);
}  

function keyPressed() {
  if(key == ' '){
    state = stateStatic;
  }
  if(key == '1'){
    state = stateOne;
  }
  if(key == '2'){
    state = stateTwo;
  }
  if(key == '3'){
    state = stateThree;
  }
  if(key == '4'){
    state = stateFour;
  }
  if(key == '5'){
    state = stateFive;
  }
}
