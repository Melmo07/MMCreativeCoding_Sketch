function setup(){
  createCanvas(windowWidth,windowHeight);
  var searchWords = "happy"
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?';
url += "api-key=7325774b17fa420eace0388afb00b628";
url += "&q=" + searchWords;
print(url);
loadJSON(url, drawData);

}

function draw(){



}

function drawData(data){

print(data.response.docs);
var articles = data.response.docs;
for (var i=0; i< articles.length; i++){
  var snippet = articles[i].snippet;
  print(articles[i].multimedia[0]);
  text(snippet, 10, 40*i);
}


}
