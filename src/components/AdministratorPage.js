import React, { Component } from 'react';
import '../styles/AdministratorPage.css';
import {
    Col,
    Jumbotron,
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem, Panel,
    Row,
    Tab
} from "react-bootstrap";
import UserData from "./UserData";


class AdministratorPage extends Component {

    render() {

        return (
          <div bsClass="AdministratorPage container">
              <br/>
              <br/>
              <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                  </p>
              </Jumbotron>
              <Row>
                  <Col xs={12} md={3}>
                      <Panel className="MenuPanel_1">

                          <Panel.Heading>Menú</Panel.Heading>

                          <ListGroup>
                              <ListGroupItem> Información Personal </ListGroupItem>
                              <ListGroupItem>Usuarios</ListGroupItem>
                              <ListGroupItem>Publicar Eventos</ListGroupItem>
                          </ListGroup>

                      </Panel>
                  </Col>
                  <Col xs={12} md={9}>
                      <Panel className="MenuPanel_2">

                          {/*================================================================================*/}
                          {/* CAMPO PARA VER LOS TIPOS DE USARIOS Y PODER MODIFICAR ALGUNOS ATRIBUTOS */}
                          <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                              <Row className="clearfix">
                                  <Col sm={12}>
                                      <Nav bsStyle="tabs">

                                          <NavItem eventKey="first">ASPIRANTES</NavItem>
                                          <NavItem eventKey="2.0">BENEFICIARIOS</NavItem>
                                          <NavItem eventKey="3.0">LIDERES</NavItem>

                                      </Nav>
                                  </Col>
                                  <Col sm={12}>
                                      <Tab.Content animation>

                                          <Tab.Pane eventKey="first">
                                              <h4>Lista de aspirantes</h4>
                                              <UserData className="container"/>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="2.0">Tab 2 content</Tab.Pane>
                                          <Tab.Pane eventKey="3.0">Tab 3 content</Tab.Pane>

                                      </Tab.Content>
                                  </Col>
                              </Row>
                          </Tab.Container>
                          {/*================================================================================*/}

                      </Panel>
                  </Col>
              </Row>

          </div>
        );
  }
}

export default AdministratorPage;
