function setup()
{
createCanvas(500, 600);
}
function draw()
{
    background(120);
    strokeWeight(1)
    fill(255,166,0);
    stroke(0, 0, 0)
    triangle(10,10,250, 580, 450, 10);
    fill(139,69,19);
    triangle(10,10,250, 55, 450, 10);
    fill(128,0,0);
    circle(250,152,60);
    circle(155,90,50);
    circle(250,450,35);
    circle(220,352,60);
    circle(155,190,55);
    circle(355,190,50);
    circle(290,244,50);
    circle(355,90,45);
    noFill();
    stroke(185, 108, 147)
    strokeWeight(3)
    arc(120, 155, 80, 80, PI, PI + QUARTER_PI);
    arc(290, 255, 180, 180, PI, PI + QUARTER_PI);
    arc(390, 455, 380, 180, PI, PI + QUARTER_PI);
    
}
