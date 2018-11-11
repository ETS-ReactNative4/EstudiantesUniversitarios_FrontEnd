import React, { Component } from 'react';
import '../styles/App.css';
import HomePage from "./HomePage";
import NewBarHome from './NewBarHome';


class App extends Component {

    render() {

        return (

          <div className="App">

              <NewBarHome/>

          </div>

        );

    }
}

export default App;
