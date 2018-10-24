import React, { Component } from 'react';
import '../styles/App.css';
import HomePage from './HomePage'
import {Panel} from "react-bootstrap";
import CarouselImages from "./CarouselImages";

class App extends Component {

    render() {

        return (
          <div className="App ">

              <Panel className="Fondo">

                  <h1>#####################</h1>

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
