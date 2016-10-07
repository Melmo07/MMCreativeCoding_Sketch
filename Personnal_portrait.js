var xPos = 0;
var yPos = 0;
var d = 150
var width = 1000;
var height = 500;
var counter = "Hello";
var counter2 = "World";

function setup() {
  //print ("Hello World");
  createCanvas(1000,500);
  background(55,155,155);
  frameRate(25);
  stroke(50);
}

function draw() {
  print(counter + " : " + counter2);
  // rectangle (x,y,width, height)
  //line (x1, y1, x2, y2)
  
  line(0,height,width,0);
fill(random(250), random(250), random(250));
  // ellipse (x,y,width,height)
  ellipse(width/2,height/2,d,d);
  ellipse(width/2+50, height/2-100, d/2,d/2);
  ellipse(width/2-50, height/2-100, d/2,d/2);
// triangle(x1y1, x2y2, x3y3)
triangle((100,150,400);
  fill(0,0,0);





}
