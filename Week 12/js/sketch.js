let myFont;
let img;
let img2;

function preload() {
  myFont = loadFont('textfiles/Arvo-Regular.ttf');
  img = loadImage('images/earth.jpg');
  img2 = loadImage('images/stars.jpg');
}

function setup() {
  createCanvas(1000, 900, WEBGL);
}

function draw() {
  background(200);
  
  // Title
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text("Shapes in Motion", -160, -200);
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
  
  // Box
  push();
  normalMaterial();
  translate(0, 0);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  box(50, 50, 50);
  pop();
  
  // Torus
  push();
  pointLight(255, 255, 255, mouseX, mouseY, 0);
  specularMaterial("#3eab2c");
  translate(300, 300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15, 24, 16);
  pop();

  // Sphere
  push();
  texture(img);
  translate(-250, -300);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.03);
  sphere(50);
  pop();

  // Cone
  push();
  translate(250, -300);
  ambientLight('#6c08ec');
  ambientMaterial(55, 26, 73);
  rotateX(frameCount * 0.04);
  rotateZ(frameCount * 0.03);
  cone(40, 70);
  pop();

  // Cylinder
  push();
  texture(img2);
  translate(-300, 300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(50, 150, 24, 16, true, true);
  pop();
}
