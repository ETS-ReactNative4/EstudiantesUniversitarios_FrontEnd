import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

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

                                <br/>
                                <br/>

                                <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            E-Mail:
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            PASSWORD:
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup  >
                                            <Button bsStyle="success"> Entrar </Button>
                                            <Button bsStyle="danger">
                                                <Link to='/HomePage'>Volvern</Link>
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
