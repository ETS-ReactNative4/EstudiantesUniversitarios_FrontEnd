import React, { Component } from 'react';
import HomePage from './HomePage';
import CarouselImages from './CarouselImages';
import Users from './Users'
import '../styles/App.css';
import {Panel} from "react-bootstrap";
import ContactPage from "./ContactPage";


class App extends Component {

    render() {

        return (
          <div className="App ">


              <Panel className="Fondo">

                  <Panel.Heading>
                      <HomePage/>
                  </Panel.Heading>

                  <Panel.Body>
                      <CarouselImages/>
                  </Panel.Body>

              </Panel>


          </div>

        );
  
    }
  
}

export default App;
