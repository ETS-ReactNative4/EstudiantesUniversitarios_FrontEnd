import React, { Component } from 'react';
<<<<<<< HEAD
import HomePage from './HomePage';
import CarouselImages from './CarouselImages';
import Users from './Users'
import '../styles/App.css';
import ContactPage from "./ContactPage";

=======
import '../styles/App.css';
import HomePage from './HomePage'
import {Panel} from "react-bootstrap";
import CarouselImages from "./CarouselImages";
>>>>>>> bc6f060ea1f918cb696f2385ec1299a9e82c2d1d

class App extends Component {

    render() {

        return (
          <div className="App ">

<<<<<<< HEAD
              <HomePage/>
              <CarouselImages/>
=======
              <Panel className="Fondo">

                  <Panel.Heading>
                      <HomePage/>
                  </Panel.Heading>

                  <Panel.Body>
                      <CarouselImages/>
                  </Panel.Body>

              </Panel>
>>>>>>> bc6f060ea1f918cb696f2385ec1299a9e82c2d1d

          </div>

        );
<<<<<<< HEAD
  }
=======
  
    }
  
>>>>>>> bc6f060ea1f918cb696f2385ec1299a9e82c2d1d
}

export default App;
