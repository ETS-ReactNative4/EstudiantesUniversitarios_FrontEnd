import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

class LoginPage extends Component {

    render() {

        return (

            <div className="LoginPage">

                <div className={"container"}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Row>

                        <Col xs={12} md={3}>
                        </Col>

                        <Col xs={12} md={6}>

                            <Jumbotron className="Ventana">

                                <h2 className="LabelsLogin">
                                    INICIAR SESIÓN
                                </h2>

                                <br/>
                                <br/>

                                <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col className="LabelsLogin" sm={3}>
                                            Correo:
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col className="LabelsLogin" sm={3}>
                                            Contraseña:
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" />
                                        </Col>
                                    </FormGroup>

                                    <br></br>
                                    

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup>
                                            <Button className="LoginBotonEntrar">
                                                <Link to='/UserLoginOk'>Entrar</Link>
                                            </Button>

                                            <Button className="LoginBotonCancelar"> 
                                                <Link to='/'> Volver </Link>

                                            </Button>
                                        </ButtonGroup>

                                    </FormGroup>
                                </Form>

                            </Jumbotron>

                        </Col>
                    </Row>

                    <Col xs={12} md={3}>
                    </Col>
                </div>
            </div>

            );

        }
    }

export default LoginPage;
