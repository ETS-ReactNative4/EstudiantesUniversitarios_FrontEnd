import React, { Component } from 'react';
import '../resources/simbolo1.jpg';
import '../resources/simbolo2.jpg';
import '../styles/Grid.css';

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        <div id="band" class="container text-center">
          <h3>Organizacion Estrudiantes Universitarios</h3>
          <p><em>Conservando nuestra identidad cultural!</em></p>
          <p>La organización de estudiantes indígenas universitarios va encaminada a la integración de indígenas estudiantes regulares, egresados y titulados de </p>
          <p>las diferentes Universidades públicas o privadas del país, con el propósito de promover la recuperación, protección y conservación de la identidad </p>
          <p>cultural, por medio de mingas de trabajo, mingas de pensamiento, tulpas donde compartamos los saberes que nuestros mayores nos dan como</p>
          <p>herencia y promoverlos de generación en generación, así mismo luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes</p>
          <p>indígenas poseemos</p>



            <div class="row">

              <div class="col-sm-4">
                <p class="text-center"><strong>MISIÓN</strong></p><br />
                <a href="#demo" data-toggle="collapse">
                  <img src={require('../resources/simbolo1.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo" class="collapse">
                  <p>Integración de Estudiantes Indigenas Universitarios.</p>
                  <p>Promover la recuperación, protección y conservación de la identidad cultural.</p>
                  <p>luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes indígenas poseemos.</p>
                </div>
              </div>

              <div class="col-sm-4">
                <p class="text-center"><strong>VISIÓN</strong></p><br />
                <a href="#demo2" data-toggle="collapse">
                  <img src={require('../resources/simbolo2.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo2" class="collapse">
                  <p>Consolidarse como Cabildo 1 menor de estudiantes indígenas universitarios del Resguardo Indigena de Pastas Aldana.</p>
                  <p>Contribuir continuamente al fortalecimiento de la identidad cultural, el saber propio, los usos y costumbres.</p>
                  <p>La protección y conservación del territorio.</p>
                </div>
              </div>

              <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br />
                <a href="#demo3" data-toggle="collapse">
                  <img src={require('../resources/simbolo1.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo3" class="collapse">
                  <p>prueba</p>
                </div>
              </div>
            </div>

        </div>

      </div>
    );
  }
}
export default Grid;
