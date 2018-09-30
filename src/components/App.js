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

        {/*creando un componente carrucel de imagenes*/}
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

        {/*creando contenedor texto centrado*/}
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

        {/*creando contenedor contacto*/}
        <div class="container">
          <h3 class="text-center">Contact</h3>
          <p class="text-center"><em>We love our fans!</em></p>

          <div class="row">
            <div class="col-md-4">
              <p>Fan? Drop a note.</p>
              <p><span class="glyphicon glyphicon-map-marker"></span>Chicago, US</p>
              <p><span class="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
              <p><span class="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
            </div>

            <div class="col-md-8">
              <div class="row">
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                </div>
              </div>
              <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
              <br />
              <div class="row">
                <div class="col-md-12 form-group">
                  <button class="btn pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*agregando pestañas */}
        <div class="container">
        <h3 class="text-center">From The Blog</h3>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#home">Mike</a></li>
          <li><a data-toggle="tab" href="#menu1">Chandler</a></li>
          <li><a data-toggle="tab" href="#menu2">Peter</a></li>
        </ul>

        <div class="tab-content">
          <div id="home" class="tab-pane fade in active">
            <h2>Mike Ross, Manager</h2>
            <p>Man, we ve been on the road for some time now. Looking forward to lorem ipsum.</p>
          </div>
          <div id="menu1" class="tab-pane fade">
            <h2>Chandler Bing, Guitarist</h2>
            <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more pleased?</p>
          </div>
          <div id="menu2" class="tab-pane fade">
            <h2>Peter Griffin, Bass player</h2>
            <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default App;
