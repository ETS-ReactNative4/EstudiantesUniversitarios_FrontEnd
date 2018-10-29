import React, { Component } from 'react';
import '../styles/ContactPage.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Label, Panel, Row} from "react-bootstrap";
import BarHome from "./BarHome";


class ContactPage extends Component {

    render() {

        return (

          <div className="ContactPage">

              <div className={"container"}>

                  <BarHome/>

                  <Grid>
                       <Row>
                          <Col xs={12} md={3}>
                              <Panel bsStyle="info" >
                                  <Panel.Heading >
                                      <Panel.Title componentClass="h2">
                                          Información
                                      </Panel.Title>
                                  </Panel.Heading>
                                  <Panel.Body>
                                      <h4>
                                          Ubicación:
                                          <br/>
                                          <br/>
                                          <Label>Aldana, Nariño</Label>
                                          <br/>
                                          <br/>
                                      </h4>

                                      <h4>
                                          Telefono:
                                          <br/>
                                          <br/>
                                          <Label>+00 123456789</Label>
                                          <br/>
                                          <br/>
                                      </h4>

                                      <h4>
                                          E-Mail:
                                          <br/>
                                          <br/>
                                          <Label> unipastasaldana@gmail.com</Label>
                                      </h4>
                                  </Panel.Body>
                              </Panel>
                          </Col>
                          <Col xs={12} md={9}>
                              <Panel bsStyle="success">
                                  <Panel.Heading>
                                      <Panel.Title componentClass="h2">
                                          Contacto
                                      </Panel.Title>
                                  </Panel.Heading>
                                  <Panel.Body>
                                      <FormGroup inline>

                                          <FormGroup controlId="formInlineNombre">
                                              <ControlLabel> Nombres: </ControlLabel> {' '}
                                              <FormControl type="text" placeholder="nombres" />
                                          </FormGroup>{' '}

                                          <FormGroup controlId="formInlineApellido">
                                              <ControlLabel> Apellidos: </ControlLabel>{' '}
                                              <FormControl type="text" placeholder="apellidos" />
                                          </FormGroup>{' '}

                                      </FormGroup>

                                      <br/>

                                      <FormGroup controlId="formInlineEmail">
                                          <ControlLabel> Email: </ControlLabel>{' '}
                                          <FormControl type="email" placeholder="ejemplo@correo.com" />
                                      </FormGroup>{' '}

                                      <FormGroup controlId="formInlineAsunto">
                                          <ControlLabel> Asunto: </ControlLabel>{' '}
                                          <FormControl type="email" placeholder="asunto" />
                                      </FormGroup>{' '}

                                      <FormGroup controlId="formControlsTextarea">
                                          <ControlLabel> Mensaje: </ControlLabel>
                                          <FormControl componentClass="textarea" placeholder="Escriba su mensaje..." />
                                      </FormGroup>

                                      <Form className="CentrarBoton" bsStyle="success">
                                          <Button  bsStyle="success" > Enviar </Button>
                                      </Form>
                                  </Panel.Body>
                              </Panel>
                          </Col>
                      </Row>
                  </Grid>
              </div>
          </div>

        );
  }
}

export default ContactPage;
