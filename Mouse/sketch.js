
var mappedX;
var mappedY;
var lineWeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //pas de ligne pour entourer les formes géométrique
  //noStroke();
  stroke(255)
}

function draw() {
  // map(poisition souriX, inpout(entrée de la souri), positionSouriY, outpout(sortie de la souri), range ou échelle de a,(à) b
  mappedX = map(mouseX, 0, width, 300, 20);
  mappedY = map(mouseY, 0, height, 20, 300);
  //background(mappedX);
  //fil(R,V,B)
  fill(mappedX, random(250-255), mappedY);
  print(mouseX, mouseY);
  ellipse(mouseX, mouseY, mappedX ,mappedY);


}
// function mousePressed = dès que l'on clic, le background blanc se remet en place
function mousePressed(){
  background(255);
}
function windowResized() {
  // console.log(java script web) = println (librairie p5js)
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}
