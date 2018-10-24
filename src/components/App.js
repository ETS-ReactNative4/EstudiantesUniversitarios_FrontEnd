import React, { Component } from 'react';
import HomePage from './HomePage'
import Users from './Users'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<HomePage/>*/}
          <Users/>
      </div>
    );
  }
}

export default App;
