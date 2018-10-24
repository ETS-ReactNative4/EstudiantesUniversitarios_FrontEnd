import React, { Component } from 'react';
import HomePage from './HomePage';
import CarouselImages from './CarouselImages';
import Users from './Users'
import '../styles/App.css';
import {Panel} from "react-bootstrap";
import ContactPage from "./ContactPage";

<<<<<<< HEAD

=======
>>>>>>> daaee6ce8b4a0c0039ec9ebcc3a338a3e1aa04aa

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

>>>>>>> daaee6ce8b4a0c0039ec9ebcc3a338a3e1aa04aa

          </div>

        );
<<<<<<< HEAD
  }
=======
  
    }
  
>>>>>>> daaee6ce8b4a0c0039ec9ebcc3a338a3e1aa04aa
}

export default App;
