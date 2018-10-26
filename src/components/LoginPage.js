import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Button, ButtonGroup, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

class LoginPage extends Component {

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
                                        Contraseña:
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="password" placeholder="contraseña" />
                                    </Col>
                                </FormGroup>

                                <FormGroup className="BarraBotones">

                                    <ButtonGroup  >
                                        <Button type="submit" bsStyle="success"> Entrar </Button>
                                        <Button bsStyle="danger"> Volver </Button>
                                    </ButtonGroup>

                                </FormGroup>
                            </Form>

                        </Jumbotron>

                    </Col>
                </Row>

                <Col xs={12} md={3}>
                </Col>

            </div>

            );

        }
    }

export default LoginPage;
