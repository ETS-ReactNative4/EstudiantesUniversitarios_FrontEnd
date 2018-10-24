import React, { Component } from 'react';
import HomePage from './HomePage'
import Users from './Users'
import '../styles/App.css';
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";


class App extends Component {

    render() {

        return (
          <div className="App ">

              <HomePage/>
              <ContactPage/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

          </div>

        );
  }
}

export default App;
