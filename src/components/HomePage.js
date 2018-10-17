import React, { Component } from 'react';
import '../styles/HomePage.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">

          <div id="header-wrapper">

              <div id="header" className="container ">
                  <div id="logo">
                      <h1><a href="#">
                          ORGANIZCIÓN DE ESTUDIANTES UNIVERSITARIOS
                          <br/>
                          DEL RESGUARDO DE PASTAS
                      </a></h1>
                  </div>
              </div>
          </div>

          <Navbar className="container" inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#brand">INICIO</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavItem eventKey={1} href="#">
                          Acerca de la organización
                      </NavItem>
                      <NavItem eventKey={2} href="#">
                          Eventos
                      </NavItem>
                      <NavItem eventKey={3} href="#">
                          Accesorios
                      </NavItem>
                  </Nav>
                  <Nav pullRight>
                      <NavItem eventKey={1} href="#">
                          <li><Link to='/LoginPage'>Inicar Sesión</Link></li>
                      </NavItem>
                      <NavItem eventKey={2} href="#">
                          <li><Link to='/RegisterPage'>Registrarse</Link></li>
                      </NavItem>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

          <br/>


          <div id="page" className="container">

              <div className="container CuadroImagen">

              </div>



          </div>


      </div>
    );
  }
}

export default HomePage;
