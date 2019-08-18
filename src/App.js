import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){

    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount(){
    this.getNewQuote();
  }

  getNewQuote(){
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length) //quote number
            let randomQuote = data[quoteNum] //actual quote

            this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author']
            })
         })
  }


  render() {
    const { quote, author } = this.state
    return (
      <div>
          <h1>Quote-Me!</h1>
          <h4>Click the button below to get a random quote!</h4>
          <div id='text'><p>{quote}</p></div>
          <div id='author'><h5>{author}</h5></div>
          <div class = "wrapper">
          <button class="button" onClick={this.getNewQuote}>New Quote</button>
          </div>
      </div>
    );
  }
}

export default App;