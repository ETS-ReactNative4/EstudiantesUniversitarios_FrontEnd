import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Organización Estudiantes Universitarios Pastas Aldana</h1>
          <Link to='/login'>Inciar Sesión</Link>
          <Link to='/register'>Registrarse</Link>
        </header>
      </div>
    );
  }
}

export default App;
