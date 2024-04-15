let myFont;
let img;
let img2;
let leo;
let cat;
let blackhole;
let birds;
let shapeArray = [];
let rotationSpeedX = 0.03;
let rotationSpeedY = 0.02;
let rotationSpeedx = 0.04;
let rotationSpeedy = 0.06;
let rotationSpeedc = 0.07;
let rotationSpeedd = 0.01;
let rotationSpeedC = 0.05;
let rotationSpeedD = 0.08;
let rotationSpeedI = 0.09;
let rotationSpeedK = 0.1;
let star

function preload() {
  myFont = loadFont('textfiles/Arvo-Regular.ttf');
  img = loadImage('images/earth.jpg');
  img2 = loadImage('images/stars.jpg');
  leo = loadImage('images/leo.jpg');
  cat = loadImage('images/cat.jpg');
  blackhole = loadImage('images/blackhole.jpg');
  birds = loadImage('images/birds.jpg');
  star = loadModel ('assets/star.obj', true)
}

function setup() {
  createCanvas(1000, 900, WEBGL);
  
  // shape array
  shapeArray.push(new shapeclass("box", 50, 50, 50, 0, 400, rotationSpeedX, rotationSpeedY, 0, leo));
  shapeArray.push(new shapeclass("cylinder", 30, 70, 0, -300, 0, rotationSpeedX, rotationSpeedY, 0, leo));
}

function draw() {
  background(200);
  
    push();
    scale(0.4); // Scaled to make model fit into canvas
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); // For effect
    model(star);
    pop();
    // Title
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill('#ED225D');
    textFont(myFont);
    textSize(36);
    text("ShapeMotion + other", -160, -200);
    pop();
    
    // Name
    push();
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    fill('#00d4ff');
    textFont(myFont);
    textSize(36);
    text("By Helen", -70, 200);
    pop();

  // Display shapes from the shape array
  for (let i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // Box
  push();
  normalMaterial();
  texture(cat);
  rotateX(frameCount * rotationSpeedX);
  rotateY(frameCount * rotationSpeedY);
  translate(0, -300);
  box(50, 50, 50);
  pop();
  
  // Torus
  push();
  normalMaterial();
  texture(birds);
  rotateX(frameCount * rotationSpeedx);
  rotateY(frameCount * rotationSpeedy);
  translate(300, 300);
  torus(50, 15, 24, 16);
  pop();

  // Sphere
  push();
  texture(img);
  rotateX(frameCount * rotationSpeedc);
  rotateY(frameCount * rotationSpeedd);
  translate(-250, -300);
  sphere(50);
  pop();

  // Cone
  push();
  translate(250, -300);
  normalMaterial();
  texture(blackhole);
  rotateX(frameCount * rotationSpeedC);
  rotateZ(frameCount * rotationSpeedD);
  cone(40, 70);
  pop();

  // Cylinder
  push();
  texture(img2);
  rotateX(frameCount * rotationSpeedI);
  rotateY(frameCount * rotationSpeedK);
  translate(-300, 300);
  cylinder(50, 150, 24, 16, true, true);
  pop();

  if (mouseIsPressed) {
    let translationX = random(width);
    let translationY = random(height);
    
    // Constrain translationX and translationY to stay within canvas bounds
    translationX = constrain(translationX, -500, width);
    translationY = constrain(translationY, -900, height);
    
    for (let i = 0; i < shapeArray.length; i++) {
      shapeArray[i].translateX = translationX;
      shapeArray[i].translateY = translationY;
    }
  }
}