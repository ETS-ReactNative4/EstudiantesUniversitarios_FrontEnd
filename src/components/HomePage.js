import React, { Component } from 'react';
import '../styles/HomePage.css';
import {Breadcrumb, MenuItem, Nav, Navbar, NavDropdown, NavItem, PageHeader} from "react-bootstrap";
import UserList from './UserList';
import {Link} from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage container">

          {/* ======================================================================== */}
          {/* BARRA PARA EL INICIO O REGISTRO DE USUARIO */}
          <div >
              <Breadcrumb className="BarraHome">
                  <Breadcrumb.Item className="LetraColor" href="#">
                      Iniciar Sesión
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">
                      Resgistrarse
                  </Breadcrumb.Item>
              </Breadcrumb>
          </div>
          {/* ======================================================================== */}


          {/* ======================================================================== */}
          {/* TITULO DE LA PAGINA */}
          <PageHeader>
              <h1 className="GranTitulo">
                  OEURP
              </h1>

              <small className="MiniTitulo">
                  Organización De Estdiantes Universitarios Del Resguardo De Pastas
              </small>
          </PageHeader>
          {/* ======================================================================== */}

          {/* ======================================================================== */}
          {/* BARRA DE NAVEGACION DE LA PAGINA DE INICIO */}
          <Navbar className="BarraNavegacion">
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">INICIO</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="#">
                      Publicaciones
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                      Convenios Con Universidades
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                      Eventos
                  </NavItem>
              </Nav>

              <Nav pullRight >
                  <NavDropdown eventKey={1} title="Información" id="basic-nav-dropdown">
                      <MenuItem eventKey={1.1}>¿Quienes somos?</MenuItem>
                      <MenuItem eventKey={1.2}>Misión</MenuItem>
                      <MenuItem eventKey={1.3}>Visión</MenuItem>
                  </NavDropdown>
                  <NavItem className="MenuIzquierda" eventKey={2} href="#">
                      Contactenos
                  </NavItem>
              </Nav>
          </Navbar>
          {/* ======================================================================== */}



      </div>
    );
  }
}

export default HomePage;
