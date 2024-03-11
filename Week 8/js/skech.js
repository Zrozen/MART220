var cowGirlObjects = [];
var cowGirlRunObjects = [];
var animation = [];
var result = [];
var runresult = [];
var i = 0;
let pizzas = [];
let enemys = [];
let animationX; 
let animationY;
let animationWidth = 150; 
let animationHeight = 150; 
let pizzaCounter = 0; // Counter for collected pizzas
let timerValue = 10;
var countdown = 30;
let gameOver = false;
let youWin = false;
var currentObjects = [];
var mySound;
var goodfood;
var badfood;
function preload() {

     mySound = loadSound('assets/sounds/loop.wav', soundLoaded);
     goodfood = loadSound('assets/sounds/correct.wav', soundLoaded);
     badfood = loadSound('assets/sounds/fail.wav', soundLoaded);
    result = loadStrings('textfiles/idle.txt');
    runresult = loadStrings('textfiles/run.txt');
    cowGirlObjects = []; 
    cowGirlRunObjects = []; 
    for(var i = 0; i < result.length; i++) {
        cowGirlObjects.push(new imageclass(result[i], 0, 0,150,150));
        cowGirlRunObjects.push(new AnimationImage(result[i], 250,250, 150, 150)); // Adjust width and height
    }
   
}



function setup() {
  createCanvas(1200, 900); // Adjust canvas size
  for (var i = 0; i < result.length; i++) {
    cowGirlObjects.push(new AnimationImage(result[i], 250,250, 100, 100)); // Adjust width and height
    animation[i] = cowGirlObjects[i].animation;
  }
  for(var i = 0; i < runresult.length; i++) {
    cowGirlRunObjects.push(new AnimationImage(runresult[i], 0, 0, 150, 150)); // Adjust width and height
  }

  setInterval(incrementIndex, 50);
  for (let i = 0; i < 20; i++) {
    pizzas.push(new Pizza(random(width), random(height)));
  }
  for (let i = 0; i < 5; i++) {
    enemys.push(new enemy(random(width), random(height)));
  }
  setInterval(timeIt, 1000);
  setInterval(decrementCountdown, 1000);


  if (mySound.isLoaded()) {
    mySound.play();
    mySound.setVolume(0.3);
} else {
    console.error('Sound is not loaded yet.');
}
}


function draw() {
    background(120);
    animationX = cowGirlObjects[i].x + animationWidth / 2;
    animationY = cowGirlObjects[i].y + animationHeight / 2;
    if (keyIsPressed) {
        if (key == "d") {
            currentObjects = cowGirlRunObjects;
            for (let j = 0; j < currentObjects.length; j++) {
                currentObjects[j].x += 20; // Move right
            }
        } else if (key == "w") {
            currentObjects = cowGirlRunObjects;
            for (let j = 0; j < currentObjects.length; j++) {
                currentObjects[j].y -= 20; // Move up
            }
        } else if (key == "s") {
            currentObjects = cowGirlRunObjects;
            for (let j = 0; j < currentObjects.length; j++) {
                currentObjects[j].y += 20; // Move down
            }
        } else if (key == "a") {
            currentObjects = cowGirlRunObjects;
            for (let j = 0; j < currentObjects.length; j++) {
                currentObjects[j].x -= 20; // Move left
            }
        } else {
            currentObjects = cowGirlObjects; // Default to cowGirlObjects if no movement keys are pressed
        }
    } else {
        currentObjects = cowGirlObjects; // Default to cowGirlObjects if no keys are pressed
        for (let j = 0; j < currentObjects.length; j++) {
            currentObjects[j].x = cowGirlRunObjects[j].x;
            currentObjects[j].y = cowGirlRunObjects[j].y;
        }
    }
    
    for (let j = 0; j < currentObjects.length; j++) {
        image(currentObjects[j].animation, currentObjects[j].x, currentObjects[j].y, currentObjects[j].w, currentObjects[j].h);
    }

    for (let enemy of enemys) {
        enemy.update();
        enemy.display();
        

   for (let j = enemys.length - 1; j >= 0; j--) {
        let enemy = enemys[j];
        enemy.update();
        if (checkCollision(enemy, animationX, animationY, animationWidth, animationHeight)) {
            console.log("ew");
            enemys.splice(j, 1);
            pizzaCounter--;
            badfood.play(); 
        }
    }
    }
    for (let j = pizzas.length - 1; j >= 0; j--) {
        let pizza = pizzas[j];
        pizza.update();
        if (checkCollision(pizza, animationX, animationY, animationWidth, animationHeight)) {
            console.log("Food!");
            pizzas.splice(j, 1);
            pizzaCounter++;
            goodfood.play(); 
        }
        pizza.display();
        
     

        // Display pizza counter
        fill(255);
        textSize(20);
        text("Pizza Collected: " + pizzaCounter, 10, 30);
    }

    //  countdown
    text("Time left: " + countdown + " seconds", width - 200, 30);

    // Display "You Win!"
    if (youWin) {
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(0, 255, 0);
        text("You Win!", width / 2, height / 2);
    }

    // Display "Game Over!"
    if (gameOver) {
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        text("Game Over!", width / 2, height / 2);
    }
}

function soundLoaded() {
    console.log('Sound loaded successfully.');
}
function keyPressed() {
    if (keyCode === 68 || keyCode === 83) { 
        mySound.play();
    }
}

    
    

function incrementIndex() {
  i += 1;

  // array, start over
  if (i >= cowGirlObjects.length) {
    i = 0;
  }
  if (i >= cowGirlRunObjects.length) {
    i = 0;
  }
}

function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }

    // Random pizzas
    if (random(1) < 0.1) { 
        for (let pizza of pizzas) {
            pizza.randomizeDirection();
        }
    }
}

function checkCollision(pizza, animationX, animationY, animationWidth, animationHeight) {
    let pizzaRadius = pizza.size / 2;
    let pizzaX = pizza.x;
    let pizzaY = pizza.y;

    let animationLeft = animationX - animationWidth / 2;
    let animationRight = animationX + animationWidth / 2;
    let animationTop = animationY - animationHeight / 2;
    let animationBottom = animationY + animationHeight / 2;

    return (
        pizzaX + pizzaRadius > animationLeft &&
        pizzaX - pizzaRadius < animationRight &&
        pizzaY + pizzaRadius > animationTop &&
        pizzaY - pizzaRadius < animationBottom
    );
}

function decrementCountdown() {
    if (countdown <= 0 || pizzaCounter >=15) {
        if (pizzaCounter >=15) {
            youWin = true; // Set the flag to display "You Win!"
            if(mySound.isPlaying())
            {
              mySound.stop();
            }
        } else {
            gameOver = true; // Set the flag to display "Game Over!"
            if(mySound.isPlaying())
            {
              mySound.stop();
            }
        }
    } else {
        countdown--; 
    }
}
