import React, { Component } from 'react';
import '../styles/RegisterPage.css';
import {Button, ButtonGroup, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

class RegisterPage extends Component {

    render() {

        return (

            <div className="LoginPage container">

                <br/>
                <br/>
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

                            <br/>
                            <h1 className="Titulo">Registrarse</h1>
                            <br/>

                            <Form horizontal>
                                <FormGroup controlId="formHorizontalNombre">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Nombre:
                                    </Col>

                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalApellido">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Apellido:
                                    </Col>

                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Correo electrónico:
                                    </Col>

                                    <Col sm={9}>
                                        <FormControl type="email" placeholder="ejemplo@prueba.com" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Contraseña:
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="password" placeholder="contraseña" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalConfPassword">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Confirmar Contraseña:
                                    </Col>
                                    <Col className="rapido" sm={9}>
                                        <FormControl type="password" placeholder="contraseña" />
                                    </Col>
                                </FormGroup>

                                <FormGroup className="BarraBotones">

                                    <ButtonGroup  >
                                        <Button type="submit" bsStyle="success"> Crear Usuario </Button>
                                        <Button bsStyle="danger"> Volver </Button>
                                    </ButtonGroup>

                                </FormGroup>
                            </Form>

                        </Jumbotron>

                    </Col>
                </Row>

                <Col xs={12} md={2}>
                </Col>

            </div>

        );

    }

}

export default RegisterPage;
