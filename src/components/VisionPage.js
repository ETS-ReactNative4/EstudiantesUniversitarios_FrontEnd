import React, { Component } from 'react';
import '../styles/VisionPage.css';
import BarHome from "./BarHome";
import {Grid, Jumbotron} from "react-bootstrap";


class VisionPage extends Component {

    render() {

        return (

          <div className="VisionPage">

              <div className={"container"}>

                  <BarHome/>

                  <Grid>
                      <Jumbotron >
                          <h1 className="TituloVision">Visión</h1>
                          <br/>
                          <br/>

                          <div className="CentrarTexto">

                              <br/>
                              <br/>
                              <p>La protección y conservación del territorio.</p>
                              <br/>
                              <br/>
                              <p>Contribuir continuamente al fortalecimiento de la identidad cultural, el saber propio, los usos y costumbres.</p>
                              <br/>
                              <br/>
                              <p>Consolidarse como Cabildo 1 menor de estudiantes indígenas universitarios del Resguardo Indigena de Pastas Aldana.</p>

                          </div>
                      </Jumbotron>
                  </Grid>

              </div>

          </div>

        );
  
    }
  
}

export default VisionPage;
