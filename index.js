var currentQuote = "";
var currentAuthor = "";
function $(x) {
  return document.getElementById(x);
}
async function getQuotes(){
  const reponse = await fetch('quote.json');
  const data = await reponse.json();
  return data.quotes[Math.floor(Math.random()*data.quotes.length)];
}

function getQuote(){
  getQuotes().then(key => {
    $("author").innerHTML = key.author;
    $("text").innerHTML = key.quote;
    $("tweet-quote").setAttribute(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + key.author + '" ' + key.quote)
    );
  });
}
$("new-quote").onclick = getQuote();
