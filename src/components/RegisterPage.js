import React, { Component } from 'react';
import '../styles/RegisterPage.css';
import {ControlLabel, Button, ButtonGroup, Col, Form, FormControl, FormGroup, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterPage extends Component {

    

    constructor(props) {
        super(props);
        
        this.state = {
           name: "",
           validName: false,
        }
    }

    validarNombre(event) {
        const soloTexto = /^([A-Za-z])+((\s)*([A-Za-z]))*$/;

        const validName = soloTexto.test(event.target.value);
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
                                <FormGroup controlId="formValidationError2" validationState={null}>
                                    <ControlLabel>Input with error and feedback icon</ControlLabel>
                                    <FormControl type="text" />
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
