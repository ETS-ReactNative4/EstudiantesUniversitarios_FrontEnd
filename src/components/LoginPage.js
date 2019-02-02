import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {ControlLabel, FormControl, HelpBlock, Button, ButtonGroup, Col, Form, FormGroup, Jumbotron, Row} from "react-bootstrap";

class LoginPage extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            role_id: "",
            email: " ",
            isValidEmail: false,
            password: " "
        };

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validateEmail(event) {
        const soloEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const email = event.target.value;
        const isValidEmail = soloEmail.test(email);
        this.setState({ isValidEmail });
        this.setState({ email });
    }

    validatePassword(event) {
        const password = event.target.value;
        this.setState({ password });
    }


    handleSubmit = event => {
        event.preventDefault();

        fetch("https://unipastas-back.herokuapp.com/user_token",
            {
                method: 'POST',
                body: JSON.stringify({
                    auth: {
                        email: this.state.email,
                        password: this.state.password
                    }
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            },
        ).then(res => res.json()).then(res => ((console.log(res.jwt),console.log("holamundooooooooooooooooooooooooooooooooooooooooo"), console.log(res)),
                window.localStorage.setItem('jwt', res.jwt)
        ))
            //.then(() => this.props.history.push('/UserLoginSuccess'))
            .then(() => this.props.history.push('/listausuarios'))
           
            .catch(function(error){console.log('Error: ', error.message)})

    }

    render() {

        return (

            <div className="LoginPage">

                <div className="container">

                    <Row>

                        <Col xs={12} md={3} />

                        <Col xs={12} md={6}>

                            <Jumbotron className="VentanaLogin">

                                <h1 className="LabelsLogin">
                                    INICIAR SESIÓN
                                </h1>

                                <br />
                                
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    
                                    {/* ************************************************************************************ */}
                                    {/* ************************************************************************************ */}

                                    <FormGroup controlId="formValidationEmail" validationState={ this.state.email.length === 1 ? null : this.state.isValidEmail ? "success" : "error"}>
                                        <Row>
                                            <Col className="MiniLabelsLogin" xs={12} md={3}>
                                                <ControlLabel >CORREO ELECTRÓNICO:</ControlLabel>
                                            </Col>
                                            <Col xs={12} md={9}>
                                                <FormControl type="text" onChange={ this.validateEmail } />
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} md={3}>
                                                    
                                            </Col>
                                            <Col xs={12} md={9}>
                                                <HelpBlock>{ this.state.email.length === 0  & !this.state.isValidEmail ? "Por favor ingrese un corre electronico válido" : ""}</HelpBlock>    
                                            </Col>
                                        </Row>
                                        <FormControl.Feedback />
                                    </FormGroup>

                                    <FormGroup controlId="formValidationPassword" validationState={ null}>
                                        <Row>
                                            <Col className="MiniLabelsLogin" xs={12} md={3}>
                                                <ControlLabel >CONTRASEÑA:</ControlLabel>                                        
                                            </Col>
                                            <Col xs={12} md={9}>
                                                <FormControl type="password" onChange={ this.validatePassword } />
                                                
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} md={3}>
                                                    
                                            </Col>
                                            <Col xs={12} md={9}>                                                    

                                            </Col>
                                        </Row>
                                        <FormControl.Feedback />
                                    </FormGroup>

                                    {/* ************************************************************************************ */}
                                    {/* ************************************************************************************ */}

                                    <br />

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup>

                                            <Button className="LoginBotonEntrar" type="submit">
                                                Entrar
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

                    <Col xs={12} md={3} />
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
 

         
            </div>

            );

        }
    }

export default LoginPage;
