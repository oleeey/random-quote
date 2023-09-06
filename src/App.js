import './App.scss';
import {quotes} from './quotes.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesList: quotes,
      quote: "",
      author: "",
      color: ""
    }
    this.getQuote = this.getQuote.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getQuote() {
    // zufälliges Zitat auswählen
    let index = Math.round(Math.random()*quotes.length);
    if (index === quotes.length) {
      this.getQuote()
    }
    else {
      this.setState({
        quote: this.state.quotesList[index][0],
        author: this.state.quotesList[index][1]
      })
    }
  }

  getRandomColor() {
    // zufällige Zahl generieren und damit ein Hexcode erstellen für eine zufällige Farbe
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    this.setState({
      color: "#" + randomColor
    });
  }

  componentDidMount() {
    this.getQuote();
    this.getRandomColor();
  }
  
  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div className="App" id='quote-box'>
        <i className="fas fa-quote-left quotes" style={{color: this.state.color}}></i>
        <p id='text'>{this.state.quote}</p>
        <i className="fas fa-quote-right quotes" style={{color: this.state.color}}></i>
        <p id="author" style={{color: this.state.color}}>- {this.state.author}
        </p>
        <nav>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-text={this.state.quote} title="Tweet this quote!" target="_top" className="twitter-share-button" data-show-count="false"
        style={{backgroundColor: this.state.color}}>
        <i className="fa fa-twitter"></i></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </nav>
        <button id='new-quote' 
        onClick={() => {this.getQuote(); this.getRandomColor();}}
        style={{backgroundColor: this.state.color}}
        >New quote
        </button>
      </div>
    );
  }
}

export default App;
