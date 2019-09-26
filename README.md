# hw3
What code draws the blades of grass?

stroke(random(60, 70), 100, 90);//color of the grass
  line(x, height-10, x+random(-10, 10), height-10-random(h));//grass blade
	
What code makes the "lawnmower" come by? How often does it come by?

 if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;//lawnmower comes
  }
	
  roughly 1/3 of Every 30 times x reaches the edge (h hits 100)
	
What's the point of the h variable?

allows the grass to grow higher each time x reaches the edge, and calls the lawnmower into function when h hits 100.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?

it functions to draw the grass from above the groung. height-10-random(h) alllows the grass to grow vertically upwards.
