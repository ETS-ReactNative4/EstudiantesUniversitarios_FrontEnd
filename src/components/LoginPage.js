import React, { Component } from 'react';
import '../styles/LoginPage.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormControl, FormGroup, Image, Jumbotron, Panel, Row} from "react-bootstrap";
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
            .then(() => this.props.history.push('/welcome'))
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
                    <Jumbotron className="BarraTitulo">
                        <Row>
                            <Col  xs={12} md={2}>
                                <br></br>
                                <br></br>
                                <Image className="Imagenes" width={100} height={100} alt="100x100" src={require('../resources/emblema.jpg')} />
                            </Col>

                            <Col  xs={12} md={8}>
                                <h1>
                                    OEURP
                                </h1>

                                <h3>
                                    Organización De Estudiantes Universitarios Del Resguardo De Pastas
                                </h3>
                            </Col>

                            <Col xs={12} md={2}>
                                <br></br>
                                <br></br>
                                <Image className="Imagenes" width={100} height={100} alt="100x100" src={require('../resources/emblema1.jpg')} />
                            </Col>

                        </Row>
                    </Jumbotron>
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

                                
                                {/*====================================================================*/}
                                {/*
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor='email'>email</label> <br/>
                                    <input type='email' id='email' name='email' ref={node => {this.inputNode1 = node}}/> <br/>

                                    <label htmlFor='password'>password</label> <br/>
                                    <input type='password' id='password' name='password' ref={node => {this.inputNode2 = node}}/> <br/>

                                    <input type='submit' value='Sign In'/>
                                </form>
                                */}
                                {/*====================================================================*/}
                                
                                <Form horizontal onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col className="LabelsLogin" sm={3}>
                                            Correo:
                                        {/*<Col componentClass={ControlLabel} sm={3}>
                                            <label htmlFor='email'>E-mail:</label> <br/>*/}
                                        </Col>

                                        <Col sm={9}>
                                            <FormControl type="email" placeholder="ejemplo@prueba.com" id="email" name="email" ref={node => {this.inputNode1 = node}}/>

                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">

                                        <Col className="LabelsLogin" sm={3}>
                                            Contraseña:

                                          {/*<Col componentClass={ControlLabel} sm={3}>
                                            <label htmlFor='password'>password</label> <br/>*/}

                                        </Col>
                                        <Col sm={9}>
                                            <FormControl type="password" placeholder="contraseña" id='password' name='password' ref={node => {this.inputNode2 = node}}/>
                                        </Col>
                                    </FormGroup>

                                    <br></br>
                                    

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup>
                                            <Button className="LoginBotonEntrar">
                                                <Link to='/welcome'>Entrar</Link>
                                            </Button>

                                            <Button className="LoginBotonCancelar"> 
                                                <Link to='/'> Volver </Link>

                                        {/*<ButtonGroup  >
                                            <Button type="submit" bsStyle="success"> Ingresar </Button>
                                            <Button bsStyle="danger">
                                                <Link to='/HomePage'>Volver</Link>*/}

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
