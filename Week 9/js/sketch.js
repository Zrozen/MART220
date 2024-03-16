
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
let catImage;
let appleImage;
let cherriesImage;
let brainImage;
let pizzaImage;
let pizzaImage2;
let pizzaImage3;
let pizzaImage4;
let pizzaImage5;
let pizzaImage6;
let pizzaImage7;
let pizzaImage8;
let pizzaImage9;
let pizzaImage10;
let pineapple;
let pineapple2;
let pineapple3;
let pineapple4;
let pineapple5;

let score = 0;
let health = 5;
let gameOver = false;
let youWin = false;
function preload() {
   idlePaths = loadStrings("./images/idle/idle.txt");
   walkPaths = loadStrings("./images/walk/walk.txt");
   
}

function setup() {
  createCanvas(1000,900);
  myAnimation = new animationImage( 200, 200, 150, 150);
  myAnimation.myLoadAnimation('idle', idlePaths);
  myAnimation.myLoadAnimation('walk', walkPaths);

  //compact way to add an image
  let randomX = random(width);
  let randomY = random(height);
  catImage = new Sprite(randomX, randomY, 100, 100, 'static');
  catImage.img = loadImage("./images/cat.jpg");
  catImage.scale = 0.05;
  catImage.diameter = 100;
  //second image
  let randomZ = random(width);
  let randomQ = random(height);
  appleImage = new Sprite(randomZ, randomQ, 100, 100, 'static');
  appleImage.img = loadImage("./images/apple.jpg");
  appleImage.scale = 0.2;
  appleImage.diameter = 100
  //third image
  let randomT = random(width);
  let randomH = random(height);
  cherriesImage = new Sprite(randomT, randomH, 100, 100, 'static');
  cherriesImage.img = loadImage("./images/cherries.jpg");
  cherriesImage.scale = 0.2;
  cherriesImage.diameter = 100

  //bad
  let randomy = random(width);
  let randomC = random(height);
  pineapple = new Sprite(randomy, randomC, 100, 100, 'static');
  pineapple.img = loadImage("./images/pineapple.jpg");
  pineapple.scale = 0.05;
  pineapple.diameter = 50
  //b2
  let randomM = random(width);
  let randomN = random(height);
  pineapple2 = new Sprite(randomM, randomN, 100, 100, 'static');
  pineapple2.img = loadImage("./images/pineapple.jpg");
  pineapple2.scale = 0.05;
  pineapple2.diameter = 50
  //b3
  let randomV = random(width);
  let randomG = random(height);
  pineapple3 = new Sprite(randomV, randomG, 100, 100, 'static');
  pineapple3.img = loadImage("./images/pineapple.jpg");
  pineapple3.scale = 0.05;
  pineapple3.diameter = 50
  //b4
  let randomS = random(width);
  let randomW = random(height);
  pineapple4 = new Sprite(randomS, randomW, 100, 100, 'static');
  pineapple4.img = loadImage("./images/pineapple.jpg");
  pineapple4.scale = 0.05;
  pineapple4.diameter = 50
  //b5
  let randomJ = random(width);
  let randomK = random(height);
  pineapple5 = new Sprite(randomJ, randomK, 100, 100, 'static');
  pineapple5.img = loadImage("./images/pineapple.jpg");
  pineapple5.scale = 0.05;
  pineapple5.diameter = 50



  //pizzas
  let randomD = random(width);
  let randomB = random(height);
  pizzaImage = new Sprite(randomD, randomB, 100, 100, 'static');
  pizzaImage.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage.scale = 0.1;
  pizzaImage.diameter = 50;
  //p2
  let randomw = random(width);
  let randome = random(height);
  pizzaImage2 = new Sprite(randomw, randome, 100, 100, 'static');
  pizzaImage2.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage2.scale = 0.1;
  pizzaImage2.diameter = 50;
  //p3
  let randomr = random(width);
  let randomu = random(height);
  pizzaImage3 = new Sprite(randomr, randomu, 100, 100, 'static');
  pizzaImage3.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage3.scale = 0.1;
  pizzaImage3.diameter = 50;
  //p4
  let randomi = random(width);
  let randomo = random(height);
  pizzaImage4 = new Sprite(randomi, randomo, 100, 100, 'static');
  pizzaImage4.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage4.scale = 0.1;
  pizzaImage4.diameter = 50;
  //p5
  let randomj = random(width);
  let randomk = random(height);
  pizzaImage5 = new Sprite(randomj, randomk, 100, 100, 'static');
  pizzaImage5.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage5.scale = 0.1;
  pizzaImage5.diameter = 50;
  //p6
  let randoml = random(width);
  let randomm = random(height);
  pizzaImage6 = new Sprite(randoml, randomm, 100, 100, 'static');
  pizzaImage6.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage6.scale = 0.1;
  pizzaImage6.diameter = 50;
  //p7
  let randomn = random(width);
  let randomb = random(height);
  pizzaImage7 = new Sprite(randomn, randomb, 100, 100, 'static');
  pizzaImage7.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage7.scale = 0.1;
  pizzaImage7.diameter = 50;
  //p8
  let randomv = random(width);
  let randomc = random(height);
  pizzaImage8 = new Sprite(randomv, randomc, 100, 100, 'static');
  pizzaImage8.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage8.scale = 0.1;
  pizzaImage8.diameter = 50;
  //p9
  let randomx = random(width);
  let randomz = random(height);
  pizzaImage9 = new Sprite(randomx, randomz, 100, 100, 'static');
  pizzaImage9.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage9.scale = 0.1;
  pizzaImage9.diameter = 50;
  //p10
  let randomf = random(width);
  let randoms = random(height);
  pizzaImage10 = new Sprite(randomf, randoms, 100, 100, 'static');
  pizzaImage10.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage10.scale = 0.1;
  pizzaImage10.diameter = 50;
  //p11
  let random1 = random(width);
  let random2 = random(height);
  pizzaImage11 = new Sprite(random1, random2, 100, 100, 'static');
  pizzaImage11.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage11.scale = 0.1;
  pizzaImage11.diameter = 50;
  //p12
  let random3 = random(width);
  let random4 = random(height);
  pizzaImage12 = new Sprite(random3, random4, 100, 100, 'static');
  pizzaImage12.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage12.scale = 0.1;
  pizzaImage12.diameter = 50;
  //p13
  let random5 = random(width);
  let random6 = random(height);
  pizzaImage13 = new Sprite(random5, random6, 100, 100, 'static');
  pizzaImage13.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage13.scale = 0.1;
  pizzaImage13.diameter = 50;
  //p14
  let random7 = random(width);
  let random8 = random(height);
  pizzaImage14 = new Sprite(random7, random8, 100, 100, 'static');
  pizzaImage14.img = loadImage("./images/pizza.jpg"); // Corrected image loading
  pizzaImage14.scale = 0.1;
  pizzaImage14.diameter = 50;
}

// display all the frames using the draw function as a loop
function draw() 
{

    background(120);  
    
    if(kb.pressing('d'))
    {
        if(myAnimation.isColliding(catImage,appleImage,cherriesImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(pizzaImage))
        {
            pizzaImage.remove();
            score++;
        }  
        else if(myAnimation.isColliding(pizzaImage2))
        {
            pizzaImage2.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage3))
        {
            pizzaImage3.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage4))
        {
            pizzaImage4.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage5))
        {
            pizzaImage5.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage6))
        {
            pizzaImage6.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage7))
        {
            pizzaImage7.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage8))
        {
            pizzaImage8.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage9))
        {
            pizzaImage9.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage10))
        {
            pizzaImage10.remove();
            score++;
        }
        else if(myAnimation.isColliding(pineapple))
        {
            pineapple.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple2))
        {
            pineapple2.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple3))
        {
            pineapple3.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple4))
        {
            pineapple4.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple5))
        {
            pineapple5.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pizzaImage11))
        {
            pizzaImage11.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage12))
        {
            pizzaImage12.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage13))
        {
            pizzaImage13.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage14))
        {
            pizzaImage14.remove();
            score++;
        }
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
          
    }
    else if(kb.pressing('a'))
    {
        if(myAnimation.isColliding(catImage,appleImage,cherriesImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');  
        }
        else if(myAnimation.isColliding(pizzaImage))
        {
            pizzaImage.remove();
            score++;
        }   
        else if(myAnimation.isColliding(pizzaImage2))
        {
            pizzaImage2.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage3))
        {
            pizzaImage3.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage4))
        {
            pizzaImage4.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage5))
        {
            pizzaImage5.remove();
            score++;
        }  
        else if(myAnimation.isColliding(pizzaImage6))
        {
            pizzaImage6.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage7))
        {
            pizzaImage7.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage8))
        {
            pizzaImage8.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage9))
        {
            pizzaImage9.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage10))
        {
            pizzaImage10.remove();
            score++;
        }
        else if(myAnimation.isColliding(pineapple))
        {
            pineapple.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple2))
        {
            pineapple2.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple3))
        {
            pineapple3.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple4))
        {
            pineapple4.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple5))
        {
            pineapple5.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pizzaImage11))
        {
            pizzaImage11.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage12))
        {
            pizzaImage12.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage13))
        {
            pizzaImage13.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage14))
        {
            pizzaImage14.remove();
            score++;
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');        
    }
    else if(kb.pressing('w'))
    {
        if(myAnimation.isColliding(catImage,appleImage,cherriesImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(pizzaImage))
        {
            pizzaImage.remove();
            score++;
        }  
        else if(myAnimation.isColliding(pizzaImage2))
        {
            pizzaImage2.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage3))
        {
            pizzaImage3.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage4))
        {
            pizzaImage4.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage5))
        {
            pizzaImage5.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage6))
        {
            pizzaImage6.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage7))
        {
            pizzaImage7.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage8))
        {
            pizzaImage8.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage9))
        {
            pizzaImage9.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage10))
        {
            pizzaImage10.remove();
            score++;
        }
        else if(myAnimation.isColliding(pineapple))
        {
            pineapple.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple2))
        {
            pineapple2.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple3))
        {
            pineapple3.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple4))
        {
            pineapple4.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple5))
        {
            pineapple5.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pizzaImage11))
        {
            pizzaImage11.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage12))
        {
            pizzaImage12.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage13))
        {
            pizzaImage13.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage14))
        {
            pizzaImage14.remove();
            score++;
        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 

    }
    else if(kb.pressing('s'))
    {
        if(myAnimation.isColliding(catImage,appleImage,cherriesImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        } 
        else if(myAnimation.isColliding(pizzaImage))
        {
            pizzaImage.remove();
            score++;
        }  
        else if(myAnimation.isColliding(pizzaImage2))
        {
            pizzaImage2.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage3))
        {
            pizzaImage3.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage4))
        {
            pizzaImage4.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage5))
        {
            pizzaImage5.remove();
            score++;
        } 
        else if(myAnimation.isColliding(pizzaImage6))
        {
            pizzaImage6.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage7))
        {
            pizzaImage7.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage8))
        {
            pizzaImage8.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage9))
        {
            pizzaImage9.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage10))
        {
            pizzaImage10.remove();
            score++;
        }
        else if(myAnimation.isColliding(pineapple))
        {
            pineapple.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple2))
        {
            pineapple2.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple3))
        {
            pineapple3.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple4))
        {
            pineapple4.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pineapple5))
        {
            pineapple5.remove();
            score--;
            health--;
        }
        else if(myAnimation.isColliding(pizzaImage11))
        {
            pizzaImage11.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage12))
        {
            pizzaImage12.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage13))
        {
            pizzaImage13.remove();
            score++;
        }
        else if(myAnimation.isColliding(pizzaImage14))
        {
            pizzaImage14.remove();
            score++;
        }
        myAnimation.updatePosition('down');   
        myAnimation.drawAnimation('walk');        
    }
    else
    {
        myAnimation.drawAnimation('idle');
    } 
    
   
    fill(255);
        textSize(20);
        text("Pizza Collected: " + score, 10, 30);
        fill(255);
        textSize(20);
        text("Health: " + health, 300, 30);


    
        Win();
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

function Win() {
    if (score >= 10) {
        youWin = true; // Set the flag to display "You Win!"
    }
    if (health <= 0) {
        gameOver = true; // Set the flag to display "Game Over!"
    }
}
