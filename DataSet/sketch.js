function setup(){
  createCanvas(windowWidth,windowHeight);
  loadJSON("data.json", drawData);
  print("...setting up...");
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw(){



}

function drawData(data){
  print("...setting up...");
  // pour lui la donnée data["person1"].age est une donnée text car ".." dans le json
  // il faut donc lui faire faire une opération numérique (* + /) pour qu'il puisse reconnaitre le nombre
    //var circleD = data["person1"].age*1;
    //var circleD = data["person2"].age*1;
    //print(circleD);
    //ellipse (100,100,circleD, circleD);
    //ellipse (200,100,circleD, circleD);

// du coup on créer une variable pour la variable clé (qui peut être appelée index or what ev') dans les data.json
// avec data[...].age on prend l'age mais on peut prendre n'importe qu'elle autre data:  data[...].name etc..
var i = 1
    for (var index in data){
      print(data[index].age);
      //print(data[index].location);
      var age = data[index].age*1;
      var name = data[index].name;
      var ageCorrect = Math.sqrt(age/Math.PI)*10;
      fill(age*i, 0, 100);
      ellipse(100*i,100,ageCorrect,ageCorrect);
      text("version fausse",100, 250);
      ellipse(100*i,300,age,age);
      fill(0);
      text(name, 100*i,150);
      i+=1;
    }

}
