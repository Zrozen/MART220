class AnimationImage {
    constructor(fileName, x, y, w, h) {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150;
        this.animation = this.loadAnimation();  
    }

    loadAnimation() {
        return loadImage(this.fileName);
    }

    drawAnimation() {
        image(this.animation, this.x, this.y, this.w, this.h);
    }

    checkCollision(x2, y2, w2, h2) {
        return (
            this.x - this.w / 2 < x2 + w2 / 2 &&
            this.x + this.w / 2 > x2 - w2 / 2 &&
            this.y - this.h / 2 < y2 + h2 / 2 &&
            this.y + this.h / 2 > y2 - h2 / 2
        );
    }
}
