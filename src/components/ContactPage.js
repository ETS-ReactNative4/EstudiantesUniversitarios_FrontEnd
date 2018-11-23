import React, { Component } from 'react';
import '../styles/ContactPage.css';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Label, Panel, Row} from "react-bootstrap";


class ContactPage extends Component {

    render() {

        return (

          <div className="ContactPage">

                {/*========================================================================================*/}
                <Panel >

                    {/*========================================================================================*/}
                    <Panel.Heading>
                        <Panel.Title className="InformacionContacto" toggle>
                            <h1>
                                INFORMACIÓN DE CONTACTO
                            </h1> 
                        </Panel.Title>
                    </Panel.Heading>
                    {/*========================================================================================*/}


                    <Panel.Collapse>

                        {/*========================================================================================*/}
                        <Panel.Body >
                            <Row>

                                {/*========================================================================================*/}
                                <Col xs={12} md={4}>
                                    <Panel className="ContenedorInformacion" bsStyle="info" >
                                        <div className="InformacionTitulo">
                                        <Panel.Heading >
                                            <Panel.Title className="InformacionContacto">
                                                INFORMACIÓN
                                            </Panel.Title>
                                        </Panel.Heading>
                                        </div>
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
                                {/*========================================================================================*/}


                                {/*========================================================================================*/}
                                <Col xs={12} md={8}>
                                    <Panel className="ContenedorContacto" bsStyle="success">
                                        
                                        <div className="ContactoTitulo">
                                            <Panel.Heading >
                                                <Panel.Title className="InformacionContacto">
                                                    SUGERENCIAS / DUDAS / INQUIETUDES
                                                </Panel.Title>
                                            </Panel.Heading>
                                        </div>
                                    
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
                                {/*========================================================================================*/}

                            </Row>
                        </Panel.Body>
                        {/*========================================================================================*/}

                    
                    </Panel.Collapse>


                </Panel>
                

          </div>

        );
  }
}

export default ContactPage;
