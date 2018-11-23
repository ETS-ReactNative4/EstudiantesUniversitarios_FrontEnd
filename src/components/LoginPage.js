import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormGroup, Jumbotron, Row} from "react-bootstrap";
import FacebookLogin from 'react-facebook-login';

class LoginPage extends Component {

    //agregando estados para login con facebock
    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
    }

    responseFacebook = response => {
        //console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    componentClicked = () => console.log('clicked');

    handleSubmit = event => {
        event.preventDefault();

        fetch("https://unipastas-back.herokuapp.com/user_token",
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

        let fbContent;
        if(this.state.isLoggedIn){
            //fbContent=null;
            fbContent = (

                <div style={{
                    width:'400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding:'20px'
                }}>

                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Bienvenido {this.state.name}</h2>
                    correo: {this.state.email}

                </div>
            );

        }else{
            //agregando botom junto con appID de cuenta de facebook
            fbContent = (
                <FacebookLogin
                    appId="588574214930002"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );
        }

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

                                <h1 className="LabelsLogin">
                                    INICIAR SESIÓN
                                </h1>

                                <br/>
                                <br/>

                                
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col className="LabelsLogin" sm={3}>
                                            Correo:
                                        </Col>

                                        <Col sm={9}>
                                            <input  className="container EstiloCampos" placeholder='ejemplo@prueba.com' type='email' id='email' name='email' ref={node => {this.inputNode1 = node}}/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">

                                        <Col className="LabelsLogin" sm={3}>
                                            Contraseña:
                                        </Col>

                                        <Col sm={9} >
                                            <input  className="container EstiloCampos" placeholder="contraseña" type='password' id='password' name='password' ref={node => {this.inputNode2 = node}}/>
                                        </Col>
                                    </FormGroup>

                                    <br></br>
                                    

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
                                    {fbContent}
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
         
            </div>

            );

        }
    }

export default LoginPage;
