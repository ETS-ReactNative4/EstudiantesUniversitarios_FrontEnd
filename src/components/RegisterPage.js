import React, { Component } from 'react';
import '../styles/RegisterPage.css';
import {Button, ButtonGroup, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterPage extends Component {

    render() {

        return (

            <div className="RegisterPage">

                <div className={"container"}>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                   

                    <Row>

                        <Col xs={12} md={2}>
                        </Col>

                        <Col xs={12} md={8}>

                            <Jumbotron className="Ventana">

                                <div className="LabelsRegister">
                                        <h1 > Registrarse </h1>
                                </div>
                                <br></br>

                                <Form horizontal>
                                    <FormGroup controlId="formHorizontalNombre">
                                        <Col className="LabelsRegister" sm={3}>
                                            Nombre:
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="text" placeholder="" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalApellido">
                                        <Col className="LabelsRegister CampoApellido" sm={3}>
                                            Apellido:
                                        </Col>

                                        <Col sm={9} className="CampoApellido">
                                            <FormControl type="text" placeholder="" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col className="LabelsRegister" sm={3}>
                                            Correo electrónico:
                                        </Col>

                                        <Col sm={9} className="CampoCorreo">
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col className="LabelsRegister" sm={3}>
                                            Contraseña:
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalConfPassword">
                                        <Col className="LabelsRegister" sm={3}>
                                            Confirmar Contraseña:
                                        </Col>
                                        <Col className="rapido" sm={9}>
                                            <FormControl type="password" placeholder="contraseña" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup  >
                                            <Button className="RegisterBotonCrear" > 
                                                Crear Usuario 
                                            </Button>
                                            
                                            <Button className="RegisterBotonCancelar">
                                                <Link to='/'>Volver</Link>
                                            </Button>
                                        </ButtonGroup>

                                    </FormGroup>
                                </Form>

                            </Jumbotron>

                        </Col>
                    </Row>

                    <Col xs={12} md={2}>
                    </Col>
                </div>
            </div>

        );

    }

}

export default RegisterPage;
