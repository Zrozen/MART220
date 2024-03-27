class enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = random(1, 3);
        this.angle = random(TWO_PI);
        this.speedX = cos(this.angle) * this.speed;
        this.speedY = sin(this.angle) * this.speed;
        this.size = 80;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary conditions
        if (this.x < 0 || this.x > width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.speedY *= -1;
        }
    }

    display() {
        fill('black');
        ellipse(this.x, this.y, this.size, this.size);
        fill('green');
        ellipse(this.x, this.y, this.size - 10, this.size - 10);
        fill(255, 69, 0);
        ellipse(this.x - 20, this.y - 10, 10, 10);
        ellipse(this.x - 20, this.y + 20, 10, 10);
        ellipse(this.x + 20, this.y - 10, 10, 10);
        ellipse(this.x + 20, this.y + 20, 10, 10);
        ellipse(this.x, this.y, 10, 10);
    }

    randomizeDirection() {
        this.angle = random(TWO_PI);
        this.speedX = cos(this.angle) * this.speed;
        this.speedY = sin(this.angle) * this.speed;
    }

    checkCollisionWith(cowGirlObjects) {
        for (let obj of cowGirlObjects) {
            let distance = dist(this.x, this.y, obj.x, obj.y);
            if (distance < (this.size / 2 + obj.size / 2)) {
                return true; // Collision detected
            }
        }
        return false; // No collision
    }
}