import React, { Component } from 'react';
import '../styles/QuienesSomosPage.css';
import BarHome from "./BarHome";
import {Grid, Jumbotron} from "react-bootstrap";


class MisionPage extends Component {

    render() {

        return (

          <div className="MisionPage ">

              <div className={"container"}>

                  <BarHome/>

                  <Grid>
                      <Jumbotron >

                          <div className="CentrarTexto">

                              <div>

                                  <h1>Organizacion Estrudiantes Universitarios</h1>
                                  <br/>
                                  <h2>Conservando nuestra identidad cultural!</h2>
                                  <br/>
                                  <p>La organización de estudiantes indígenas universitarios va encaminada a la integración de indígenas estudiantes regulares, egresados y titulados de las diferentes Universidades públicas o privadas del país, con el propósito de promover la recuperación, protección y conservación de la identidad cultural, por medio de mingas de trabajo, mingas de pensamiento, tulpas donde compartamos los saberes que nuestros mayores nos dan como herencia y promoverlos de generación en generación, así mismo luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes indígenas poseemos</p>

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
