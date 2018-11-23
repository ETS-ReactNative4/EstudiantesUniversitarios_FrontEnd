import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

class LoginPage extends Component {

    handleSubmit = event => {
        event.preventDefault();

        fetch("http://unipastas-back.herokuapp.com/user_token",
            {
                method: 'POST',
                body: JSON.stringify({
                    auth: {
                        email: this.inputNode1.value,
                        password: this.inputNode2.value
                    }
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            },
        ).then(res => res.json()).then(res => (console.log(res.jwt),
                window.localStorage.setItem('jwt', res.jwt)
        ))
            .then(() => this.props.history.push('/UserLoginSuccess'))
            .catch(function(error){console.log('Error: ', error.message)})
    }

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

                                
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col className="LabelsLogin" sm={3}>
                                            Correo:
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" id="email" name="email" ref={node => {this.inputNode1 = node}}/>

                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">

                                        <Col className="LabelsLogin" sm={3}>
                                            Contraseña:
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" id='password' name='password' ref={node => {this.inputNode2 = node}}/>
                                        </Col>
                                    </FormGroup>

                                    <br></br>
                                    

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup>
                                            <Button className="LoginBotonEntrar">
                                                Entrar
                                                {/*<Link to='/UserLoginSuccess'>Entrar</Link>*/}
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

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
         
            </div>

            );

        }
    }

export default LoginPage;
