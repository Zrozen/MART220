
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var catImage;
var catImage2;
var catImage3;
var catImage4;
var catImage5;
var cathealth = 100;
var cathealth2 = 100;
var cathealth3 = 100;
var cathealth4 = 100;
var cathealth5 = 100;
const particles = [];
function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    attackPaths = loadStrings("./images/attack/attack.txt");
 }
 

function setup() {
    createCanvas(1500, 600);
    myAnimation = new animationImage(200, 200, 150, 150);
    myAnimation.myLoadAnimation('idle', idlePaths);
    myAnimation.myLoadAnimation('walk', walkPaths);
    myAnimation.myLoadAnimation('attack', attackPaths);

    //compact way to add an image
    catImage = createSprite(650, 100, 100, 100, 'static');
    catImage.img = "./images/pizza.jpg";
    catImage.scale = 0.15;
    catImage.diameter = 150;
    //2
    catImage2 = createSprite(350, 500, 100, 100, 'static');
    catImage2.img = "./images/pizza.jpg";
    catImage2.scale = 0.15;
    catImage2.diameter = 150;
    //3
    catImage3 = createSprite(950, 520, 100, 100, 'static');
    catImage3.img = "./images/pizza.jpg";
    catImage3.scale = 0.15;
    catImage3.diameter = 150;
    //4
    catImage4 = createSprite(1050, 150, 100, 100, 'static');
    catImage4.img = "./images/pizza.jpg";
    catImage4.scale = 0.15;
    catImage4.diameter = 150;
    //5
    catImage5 = createSprite(1350, 200, 100, 100, 'static');
    catImage5.img = "./images/pizza.jpg";
    catImage5.scale = 0.15;
    catImage5.diameter = 150;



}

// display all the frames using the draw function as a loop

function draw() {
    background(120);

    // Handle 'd' key press
    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if (catImage != null && catImage2 != null) {
            if (myAnimation.isColliding(catImage) || myAnimation.isColliding(catImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    // Handle 'a' key press
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('w')) {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        if (catImage != null && catImage2 != null) {
            if (myAnimation.isColliding(catImage) || myAnimation.isColliding(catImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('s')) {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        if (catImage != null && catImage2 != null) {
            if (myAnimation.isColliding(catImage) || myAnimation.isColliding(catImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    // Handle 'x' key press for attacking
    else if (kb.pressing('x')) {
        myAnimation.drawAnimation('attack');
        if (catImage != null && dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage.position.x, catImage.position.y) < 200) {
            createParticles(catImage.position.x, catImage.position.y);
            cathealth -= 1;
            if (cathealth <= 0) {
                catImage.remove();
                catImage = null;
            }
        }
        if (catImage2 != null && dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage2.position.x, catImage2.position.y) < 200) {
            createParticles(catImage2.position.x, catImage2.position.y);
            cathealth2 -= 1;
            if (cathealth2 <= 0) {
                catImage2.remove();
                catImage2 = null;
            }
        }
        if (catImage3 != null && dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage3.position.x, catImage3.position.y) < 200) {
            createParticles(catImage3.position.x, catImage3.position.y);
            cathealth3 -= 1;
            if (cathealth3 <= 0) {
                catImage3.remove();
                catImage3 = null;
            }
        }
        if (catImage4 != null && dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage4.position.x, catImage4.position.y) < 200) {
            createParticles(catImage4.position.x, catImage4.position.y);
            cathealth4 -= 1;
            if (cathealth4 <= 0) {
                catImage4.remove();
                catImage4 = null;
            }
        }
        if (catImage5 != null && dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, catImage5.position.x, catImage5.position.y) < 200) {
            createParticles(catImage5.position.x, catImage5.position.y);
            cathealth5 -= 1;
            if (cathealth5 <= 0) {
                catImage5.remove();
                catImage5 = null;
            }
        }
    }
    else {
        myAnimation.drawAnimation('idle');
    }

    // Check if all cat images are gone
    if (catImage === null && catImage2 === null && catImage3 === null && catImage4 === null && catImage5 === null) {
        // Display "You Win" message
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        text("You Win!", width / 2, height / 2);
    }
}
