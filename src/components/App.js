import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import '../resources/simbolo1.jpg';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            
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




          <Link to='/login'>Inciar Sesión</Link>
          <Link to='/register'>Registrarse</Link>
        </header>
      </div>
    );
  }
}

export default App;
