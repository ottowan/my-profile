import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    imageUrl: ""
  }


  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=le8pK1Kz5zl53piIZRCVyjUr5h35nZhc&limit=1')
      .then(res => res.json())
      .then(json => json.data.image_url)
      .then((imageUrl) => {
        this.setState({
          imageUrl: imageUrl
        })
        console.log(imageUrl)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
