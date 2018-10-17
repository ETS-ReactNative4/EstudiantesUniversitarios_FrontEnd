import React, { Component } from 'react';
import '../styles/App.css';
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";


class App extends Component {
  render() {
    return (
      <div className="App">
         <HomePage/>
      </div>
    );
  }
}

export default App;
