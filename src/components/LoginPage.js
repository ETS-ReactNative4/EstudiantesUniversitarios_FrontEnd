import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";

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
            .then(() => this.props.history.push('/welcome'))
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

                                <br/>
                                <br/>

                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor='email'>email</label> <br/>
                                    <input type='email' id='email' name='email' ref={node => {this.inputNode1 = node}}/> <br/>

                                    <label htmlFor='password'>password</label> <br/>
                                    <input type='password' id='password' name='password' ref={node => {this.inputNode2 = node}}/> <br/>

                                    <input type='submit' value='Sign In'/>
                                </form>

                                {/**}
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            <label htmlFor='email'>E-mail:</label> <br/>
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" id="email" name="email" ref={node => {this.inputNode1 = node}}/>

                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            <label htmlFor='password'>password</label> <br/>
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" id='password' name='password' ref={node => {this.inputNode2 = node}}/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup  >
                                            <Button type="submit" bsStyle="success"> Ingresar </Button>
                                            <Button bsStyle="danger">
                                                <Link to='/HomePage'>Volver</Link>
                                            </Button>
                                        </ButtonGroup>

                                    </FormGroup>
                                </Form>
                                {**/}

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
