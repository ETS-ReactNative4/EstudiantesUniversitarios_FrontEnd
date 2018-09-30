import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import '../resources/simbolo1.jpg';
import '../resources/imag1.jpg';
import '../resources/imag2.jpg';
import '../resources/imag3.jpg';
import '../resources/imag4.jpg';
import '../resources/imag5.jpg';
import '../resources/imag6.jpg';
import '../resources/imag7.jpg';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
        <Link to='/login'>Inciar Sesión</Link>
        <Link to='/register'>Registrarse</Link>
        </header>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">
            <img src={require('../resources/imag1.jpg')} alt="New York" />
              <div class="carousel-caption">
                <h3>New York</h3>
                <p>The atmosphere in New York is lorem ipsum.</p>
              </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag2.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
                </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag3.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
                </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag4.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
                </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag5.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
                </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag6.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
                </div>
            </div>
            <div class="item">
              <img src={require('../resources/imag7.jpg')} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago - A night we wont forget.</p>
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

        <div class="container text-center">
          <h3>Organizacion Estrudiantes Universitarios</h3>
          <p><em>Conservando nuestra identidad cultural!</em></p>
          <p>We have created a fictional band website. Lorem ipsum..</p>
          <br />
            <div class="row">

              <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br />
                <a href="#demo" data-toggle="collapse">
                  <img src={require('../resources/simbolo1.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo" class="collapse">
                  <p>Guitarist and Lead Vocalist</p>
                  <p>Loves long walks on the beach</p>
                  <p>Member since 1988</p>
                </div>
              </div>

              <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br />
                <a href="#demo2" data-toggle="collapse">
                  <img src={require('../resources/simbolo1.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo2" class="collapse">
                  <p>Guitarist and Lead Vocalist</p>
                  <p>Loves long walks on the beach</p>
                  <p>Member since 1988</p>
                </div>
              </div>

              <div class="col-sm-4">
                <p class="text-center"><strong>Name</strong></p><br />
                <a href="#demo3" data-toggle="collapse">
                  <img src={require('../resources/simbolo1.jpg')} class="img-circle person" alt="Random Name" width="255" height="255" />
                </a>
                <div id="demo3" class="collapse">
                  <p>Guitarist and Lead Vocalist</p>
                  <p>Loves long walks on the beach</p>
                  <p>Member since 1988</p>
                </div>
              </div>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
