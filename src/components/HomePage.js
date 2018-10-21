import React, { Component } from 'react';
import '../styles/HomePage.css';
import UserList from './UserList';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {NavDropdown, MenuItem} from "react-bootstrap";



class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">

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
                          Autoridad
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
                  <Nav>
                  <NavDropdown eventKey={3} title="EndPoints" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}><Link to='/usuarios'>Usuarios</Link></MenuItem>
                      <MenuItem eventKey={3.2}><Link to='/universidad'>Universidades</Link></MenuItem>
                      <MenuItem eventKey={3.3}><Link to='/roles'>Roles</Link></MenuItem>
                      <MenuItem eventKey={3.4}><Link to='/tipo_publicacion'>Tipo de Publicación</Link></MenuItem>
                      <MenuItem eventKey={3.5}><Link to='/autoridad'>Autoridad</Link></MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
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
