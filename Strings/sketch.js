var text1 = "this is"
var text2 = "so"
var text3 = "mind blowing"
var words = ["in", "the", "begining", "was", "the", "word"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(random(255));
  strokeWeight(10);
}

function draw() {

print(text1);
textSize(75);
text(text1, 50, 100);
text(text2, 50, 180);
text(text3, 50, 260);
var phrase = text1 + " " + text2 + " " + text3;
text(phrase, 50,340);

for (var i = 0; i < 6; i++){
  var randomNumber = int(random(5));
  text(words[0], 50, 50 + 50*i);
}




fill(random(255),random(255),random(255));

function mousePressed() {
  background(255);
}


}
