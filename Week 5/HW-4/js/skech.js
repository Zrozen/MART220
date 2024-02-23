
var timerValue = 10;
var startButton;
let pizzas = [];
var myAnimation;
var Animations=[];
var i= 1;
function setup() {
setInterval(timeIt, 1000);
for (let i = 0; i < 6; i++) {
  pizzas.push(new Pizza(random(width), random(height)));
}
createCanvas(900, 700);
speed = random(1,11);
myAnimation = new animationImage("./assets/caimation/Idle/Idle (1).png", 200,250,150,150)
Animations[1] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (2).png", 200,250,150,150)
Animations[2] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (3).png", 200,250,150,150)
Animations[3] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (4).png", 200,250,150,150)
Animations[4] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (5).png", 200,250,150,150)
Animations[5] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (6).png", 200,250,150,150)
Animations[6] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (7).png", 200,250,150,150)
Animations[7] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (8).png", 200,250,150,150)
Animations[8] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (9).png", 200,250,150,150)
Animations[9] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (10).png", 200,250,150,150)
Animations[10] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (11).png", 200,250,150,150)
Animations[11] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (12).png", 200,250,150,150)
Animations[12] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (13).png", 200,250,150,150)
Animations[13] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (14).png", 200,250,150,150)
Animations[14] = myAnimation;
myAnimation = new animationImage("./assets/caimation/Idle/Idle (15).png", 200,250,150,150)
Animations[15] = myAnimation;

setInterval(incrementIdleIndex, 80)
}
function draw() {
  background(120);
  Animations[i].drawAnimation();
  speed = random(1, 11);

  for (let i = pizzas.length - 1; i >= 0; i--) {
    let pizza = pizzas[i];
    pizza.update();
    if (checkCollision(Pizza, animationImage)) {
      console.log("Food!");
      pizzas.splice(i, 1);
    } else {
        console.log("Missed");
    
    }
      pizza.display();
  }
}
function incrementIdleIndex()
  {
 i++;
 if(i >= Animations.length)
 {
  i = 1;
 }
  }
 function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}


class Pizza {
  constructor(x, y,) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 15); 
    this.ySpeed = random(-1, 10);
    this.size = 80; 
  }
  
  update() {
    this.x += this.speed;
    this.y += this.ySpeed;
    
    // Wrap around
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y > height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }
  }
  
  display() {
    fill(66,35,8); // Bread
    ellipse(this.x, this.y, this.size, this.size); // Pizza base
    fill(255, 204, 0); // Yellow
    ellipse(this.x, this.y, this.size - 10, this.size - 10); // Cheese
    fill(255, 69, 0); // Red
    ellipse(this.x - 20, this.y - 10, 10, 10); // Pepperoni
    ellipse(this.x - 20, this.y + 20, 10, 10);
    ellipse(this.x + 20, this.y - 10, 10, 10); 
    ellipse(this.x + 20, this.y + 20, 10, 10);
    ellipse(this.x, this.y, 10, 10); // Middle pepperoni
  }

}

function checkCollision(Pizza, animationImage) {
  
  if (
      Pizza.x - Pizza.size / 2 < animationImage.x + animationImage.size * 50 &&
      Pizza.x + Pizza.size / 2 > animationImage.x - animationImage.size * 50 &&
      Pizza.y - Pizza.size / 2 < animationImage.y + animationImage.size * 50 &&
      Pizza.y + Pizza.size / 2 > animationImage.y - animationImage.size * 50
  ) {
      return true;
  } else {
      return false;
  }
}
