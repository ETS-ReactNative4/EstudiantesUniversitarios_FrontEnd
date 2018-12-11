import React, { Component } from 'react';
import '../styles/RegisterPage.css';
import {HelpBlock, ControlLabel, Button, ButtonGroup, Col, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterPage extends Component {

    

    constructor(props) {
        super(props);
        
        this.state = {
           name: "",
           validName: false,
           idNumber:"",
           validIdNumber: false,
           email:"",
           validEmail: false
        }
    }

    validarNombre(event) {
        const soloTexto = /^([A-Za-z])+((\s)*([A-Za-z]))*$/;

        const valid = soloTexto.test(event.target.value);
        
        console.log(valid);
        console.log(event.target.value);

        if(valid){
            this.setState({ [event.target.name]: event.target.value });
            this.setState({ valid });
        } else {
            this.setState({ valid });
        }
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
                                <ControlLabel>Nombre completo:</ControlLabel>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text" />
                                    
                                    <HelpBlock>{this.state.validName ? "El nombre solo puede contener letras" : ""}</HelpBlock>
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
