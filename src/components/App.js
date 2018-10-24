import React, { Component } from 'react';
import HomePage from './HomePage';
import CarouselImages from './CarouselImages';
import Users from './Users'
import '../styles/App.css';
import ContactPage from "./ContactPage";



class App extends Component {

    render() {

        return (
          <div className="App ">

              <HomePage/>
              <CarouselImages/>

          </div>

        );
  }
}

export default App;
