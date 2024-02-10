var x = 100;
var y = 100;
var x_Rectangle = 30;
var x_Rectangle2 = 130;
var y_Rectangle = 100;
var speed = 10;
var y_speed = 10;
var x_pep = 230;
var y_pep= 150;
var pepder= 2;
var nameX =390;
var nameY =570;
var xtitle =25;
var ytitle =50;
var img= 600;
var img2 = 700;
var img2y=900;
var img3 =800;
let myFont;
let myFont2;
var xim = 600;
var yim = 700;
var timerValue = 10;
var startButton;
function preload() {
  img = loadImage('assets/cool.jpg');
  img = loadImage('assets/cool2.jpg');
  img = loadImage('assets/cool3.jpg');
  myFont = loadFont('fonts/Arvo-Regular.ttf');
  myFont2 = loadFont('fonts/ShadowsIntoLight-Regular.ttf')
}
function setup() {
setInterval(timeIt, 1000);
image(img, xim, yim);
image(img2, img2y, 700);
image(img3, 1200, 700);
createCanvas(500, 600);
speed = random(1,11);
}
function draw()
{
    background(120);

    
    speed = random(1,11);
    xim++;
    yim++;
    if (timerValue >= 10) {
      text("0:" + timerValue, width / 2, height / 2);
    }
    if (timerValue < 10) {
      text('0:0' + timerValue, width / 2, height / 2);
    }
    if (timerValue == 0) {
      img2y += 1;
    }
    strokeWeight(1)
    fill(255,166,0);
    stroke(0, 0, 0)
    triangle(10,10,250, 580, 450, 10);
    fill(139,69,19);
    triangle(10,10,250, 55, 450, 10);
    fill(128,0,0);
    circle(x,y,45);
    circle(250,152,60);
    circle(155,90,50);
    circle(250,450,35);
    circle(220,352,60);
    circle(155,190,55);
    circle(355,190,50);
    circle(290,244,50);
    circle(355,90,45);
    noFill();
    stroke(185, 108, 147)
    strokeWeight(3)
    arc(120, 155, 80, 80, PI, PI + QUARTER_PI);
    arc(290, 255, 180, 180, PI, PI + QUARTER_PI);
    arc(390, 455, 380, 180, PI, PI + QUARTER_PI);
    fill(128,0,0);
    stroke(0, 0, 0)
    strokeWeight(1)
    circle(x_Rectangle, y_Rectangle, 50, 20); 
    circle(x_Rectangle2, y_Rectangle, 50, 20); 
    circle(x_pep, y_pep, 25, 30); 
    if (x_Rectangle >= 350 || x_Rectangle <= 0) {
      speed *= -1;
    }
  
    if (y_Rectangle >= 300 || y_Rectangle <= 50) {
      y_speed *= -1;
    }
    x_Rectangle += speed;
    y_Rectangle += y_speed;
    x_pep+=pepder;
   
    if(x_pep >= 10 || y_pep <= 136)
         {
            pepder *= 1;
         }
     if(x_pep >= 490 || y_pep <= 136)
         {
            pepder *= -1;
         }
 textFont(myFont);
 textSize(22);
 strokeWeight(1);
text('Helen', nameX, nameY);
textFont(myFont2);
text('Chaotic Pizza', xtitle, ytitle);
}
function mouseClicked() {
    x = mouseX;
    y = mouseY;
 }
 function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}