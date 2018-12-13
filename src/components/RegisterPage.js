import React, { Component } from 'react';
import '../styles/RegisterPage.css';
import {HelpBlock, ControlLabel, Button, ButtonGroup, Col, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterPage extends Component {

     // validarNombre(event) {
    //     const soloTexto = /^([A-Za-z])+((\s)*([A-Za-z]))*$/;
    //     const validName = soloTexto.test(event.target.value);
    //     console.log("nombre --> " + this.state.name);
    // }

    constructor(props) {
        super(props);
        
        this.state = {
           name: " ",
           isValidName: false,
           idNumber: " ",
           isValidIdNumber: false,
           email: " ",
           isValidEmail: false,
           password: " ",
           isValidPassword: false
        };

        this.validateName = this.validateName.bind(this);
        this.validateIdNumber =  this.validateIdNumber.bind(this);
    }

    validateName(event) {
        // console.log(event.target.value);
        const soloTexto = /^([A-Za-z])+((\s)*([A-Za-z]))*$/;
        const name = event.target.value;
        const isValidName = soloTexto.test(name);
        this.setState({ isValidName });
        this.setState({ name });
    }

    validateIdNumber(event) {
        const soloNumeros = /^([A-Za-z])+((\s)*([A-Za-z]))*$/;
        const idNumber = event.target.value;
        const isValidIdNumber = soloNumeros.test(idNumber);
        this.setState({ isValidIdNumber });
        this.setState({ idNumber });
    }

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

                                {/* ************************************************************************************ */}
                                {/* ************************************************************************************ */}
                                <FormGroup controlId="formValidationName" validationState={this.state.name.length === 1 ? null : this.state.isValidName ? "success" : "error"}>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <ControlLabel>NOMBRE:</ControlLabel>
                                        </Col>
                                        <Col xs={12} md={9}>
                                                <FormControl type="text" onChange={this.validateName}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <HelpBlock>{(this.state.name.length === 0  & !this.state.isValidName) || (this.state.name.length > 1  & !this.state.isValidName) ? "El nombre no puede contener numeros ni ser vacio" : ""}</HelpBlock>
                                        </Col>
                                    </Row> 
                                    <FormControl.Feedback />             
                                </FormGroup>


                                <FormGroup controlId="formValidationIdNumber" validationState={this.state.idNumber.length === 1 ? null : this.state.validIdNumber ? "success" : "error"}>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <ControlLabel>NÚMERO DE IDENTIFICACIÓN: </ControlLabel>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <FormControl type="text" onChange={this.validateIdNumber}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                                
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <HelpBlock>{(this.state.idNumber.length === 0  & !this.state.validIdNumber) || (this.state.name.length > 1  & !this.state.isValidName)? "El número de identificación solo pude contener números" : ""}</HelpBlock>   
                                        </Col>
                                    </Row>
                                    <FormControl.Feedback />
                                </FormGroup>


                                <FormGroup controlId="formValidationEmail" validationState={this.state.email.length === 1 ? null : this.state.validEmail ? "success" : "error"}>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <ControlLabel>CORREO ELECTRÓNICO:</ControlLabel>
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <FormControl type="text" />
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                                
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <HelpBlock>{this.state.email.length === 0  & !this.state.validEmail ? "Por favor ingrese un corre electronico válido" : ""}</HelpBlock>    
                                        </Col>
                                    </Row>
                                    <FormControl.Feedback />
                                </FormGroup>

                                <FormGroup controlId="formValidationPassword" validationState={this.state.password.length === 1 ? null : this.state.validPassword ? "success" : "error"}>
                                    <Row>
                                        <Col xs={12} md={3}>
                                            <ControlLabel>CONTRASEÑA:</ControlLabel>                                        
                                        </Col>
                                        <Col xs={12} md={9}>
                                            <FormControl type="text" />
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={3}>
                                                
                                        </Col>
                                        <Col xs={12} md={9}>                                                    
                                            <HelpBlock>{this.state.password.length === 0  & !this.state.validPassword ? "La contraseña debe contener por lo menos 6 caracteres" : ""}</HelpBlock>                                            
                                        </Col>
                                    </Row>
                                    <FormControl.Feedback />
                                </FormGroup>
                                {/* ************************************************************************************ */}
                                {/* ************************************************************************************ */}

                                <Form horizontal>
                        

                                    <p>{JSON.stringify(this.state)}</p>

                                    <FormGroup className="BarraBotones">

                                        <ButtonGroup  >
                                            <Button className="RegisterBotonCrear"> 
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
