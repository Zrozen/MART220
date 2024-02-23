class animationImage {
    constructor(fileName, x, y, w, h, size) {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.size = 2;
        this.animation = this.loadAnimation();
     
    }

    loadAnimation() {
        return loadImage(this.fileName);
    }

    drawAnimation() {
        image(this.animation, this.x, this.y, this.w, this.h);
    }
}