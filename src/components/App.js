import React, { Component } from 'react';
import '../styles/App.css';
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import {Panel} from "react-bootstrap";
import CarouselImages from "./CarouselImages";


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
