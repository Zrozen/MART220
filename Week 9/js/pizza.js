class Pizza {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = random(1, 3); // Ensure the correct random call
        this.angle = random(TWO_PI); // Initial random direction
        this.speedX = cos(this.angle) * this.speed;
        this.speedY = sin(this.angle) * this.speed;
        this.size = 80;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary conditions
        if (this.x < 0 || this.x > width) {
            this.speedX *= -1; // Reverse direction on hitting the left or right boundary
        }
        if (this.y < 0 || this.y > height) {
            this.speedY *= -1; // Reverse direction on hitting the top or bottom boundary
        }
    }


    display() {
        fill(66, 35, 8); // Bread
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

    randomizeDirection() {
        this.angle = random(TWO_PI); // Random direction
        this.speedX = cos(this.angle) * this.speed;
        this.speedY = sin(this.angle) * this.speed;
    }
    isColliding(myImage) {
        this.hasCollided =  this.currentAnimation.collide(myImage);
        return this.hasCollided;
    }
}