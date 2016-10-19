
var words = ["in", "the", "begining", "there","was", "the", "word", ",", "and", "there", "was", "light", "!"];
var outputText = "";
var offset = 50;
var counter = 0;

function setup() {
  print(words);
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  frameRate(60);
}


function draw() {
  //background(250);
  counter += 1;
//modulo = une division = % --> modulo te donne le reste de ta division.
// si counter divisé par 60 ne donne pas de reste (==0) alors fait {...}
  if (counter % 100 == 0) {
    doPermutations();
  }

}


// shuffle = mélange, randomize the words
function doPermutations() {
  print(counter);
  shuffle(words,true);
  // words.length = le numéro du total de mots dans la variable "words"
  outputText = " "
  for (var i=0; i < words.length; i+=1){
  //  print(words[i]);
    // text(words[i], 100, 100 + i*30);
    outputText = outputText + " " + words[i];
    }
    text(outputText, 100, 100 + offset);
  //offset +=50; = --> offset = offset + 50
  offset +=50;
}
