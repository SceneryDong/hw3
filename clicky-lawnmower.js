function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);//color of the grass
  line(x, height-10, x+random(10, 20), height-10-random(h));//grass blade
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }//grass growing higher each time

  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;//lawnmower comes
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);//draw the ground
}
