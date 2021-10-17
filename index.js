const useState = React.useState;
const useEffect = React.useEffect;

function App(){
  const [content, setContent] = useState({quote: 'Without music, life would be a mistake.', author: 'Friedrich Nietzsche'});
  useEffect(()=>{
    console.log(content)
    document.getElementById("author").innerHTML = content.author;
    document.getElementById("text").innerHTML = content.quote;
    document.getElementById("tweet-quote").setAttribute(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent(
          '"' + content.author + '" ' + content.quote)
      );
  },[content]);

  function getQuote(){
    fetch('./quote.json')
    .then(response=>response.json())
    .then(data=>{setContent(data.quotes[Math.floor(Math.random()*data.quotes.length)])});
  }

  return (
    <div id="quote-box" className="quote-box shadow p-3 mb-5 bg-white rounded">
      <div className="quote-text blockquote text-center">
        <i className="fa fa-quote-left"> </i>
        <span id="text" ></span>
        <p id="author" className="blockquote-footer"></p>
      </div>
      <div className="d-flex justify-content-between">
        <a
          className="btn btn-outline-primary"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button id="new-quote" className="btn btn-outline-success" onClick={getQuote}>
          <span>New Quote</span>
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));
