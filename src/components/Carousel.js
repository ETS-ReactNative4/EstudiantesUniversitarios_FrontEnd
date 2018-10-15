import React, { Component } from 'react';
import '../styles/Carousel.css';
import '../resources/imag1.jpg';
import '../resources/imag2.jpg';
import '../resources/imag3.jpg';
import '../resources/imag4.jpg';
import '../resources/imag5.jpg';
import '../resources/imag6.jpg';
import '../resources/imag7.jpg';


class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
        {/*creando un componente carrucel de imagenes*/}
        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">
            <img width={900} height={500} alt="900x500" src={require('../resources/imag1.jpg')} />
              <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
              </div>
            </div>
            <div class="item">
              <img  width={900} height={500} alt="900x500" src={require('../resources/imag2.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>
            <div class="item">
              <img width={900} height={500} alt="900x500" src={require('../resources/imag3.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>
            <div class="item">
              <img width={900} height={500} alt="900x500" src={require('../resources/imag4.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>
            <div class="item">
              <img width={900} height={500} alt="900x500" src={require('../resources/imag5.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>
            <div class="item">
              <img width={900} height={500} alt="900x500" src={require('../resources/imag6.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>
            <div class="item">
              <img width={900} height={500} alt="900x500" src={require('../resources/imag7.jpg')} />
                <div class="carousel-caption">
                <h3>Organizacion de EStudiantes Universitarios del Resguardo de Pastas Aldana-Nariño</h3>
                <p>Encaminada a la integración de estudiantes indígenas  regulares,</p>
                <p>egresados y titulados de las diferentes Universidades</p>
                <p>públicas o privadas del país.</p>
                </div>
            </div>

          </div>

          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
          </a>

        </div>
      </div>
    );
  }
}
export default Carousel;
