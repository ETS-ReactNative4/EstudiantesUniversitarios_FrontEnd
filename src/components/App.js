import React, { Component } from 'react';
import Home from './Home'
import '../styles/App.css';
import '../resources/simbolo1.jpg';
import '../resources/simbolo2.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
      </div>
    );
  }
}

export default App;
