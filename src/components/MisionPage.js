import React, { Component } from 'react';
import '../styles/MisionPage.css';
import BarHome from "./BarHome";
import {Grid, Jumbotron} from "react-bootstrap";


class MisionPage extends Component {

    render() {

        return (

          <div className="MisionPage">

              <div className={"container"}>

                  <BarHome/>

                  <Grid>
                      <Jumbotron >
                          <h1 className="TituloMision">Misión</h1>

                          <br/>
                          <br/>

                          <div className="CentrarTexto">

                              <br/>
                              <br/>

                              <div>

                                  <p>Integración de Estudiantes Indigenas Universitarios.</p>
                                  <br/>
                                  <br/>
                                  <p>Promover la recuperación, protección y conservación de la identidad cultural.</p>
                                  <br/>
                                  <br/>
                                  <p>luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes indígenas poseemos.</p>

                              </div>

                          </div>

                      </Jumbotron>

                  </Grid>

              </div>

          </div>

        );
  
    }
  
}

export default MisionPage;
