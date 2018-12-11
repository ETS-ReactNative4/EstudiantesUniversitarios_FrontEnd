import React, { Component } from 'react';
import '../styles/UserLoginSuccess.css';
import {Link} from 'react-router-dom';
import { Table, FormGroup, Nav, NavItem, Tab, Jumbotron, Label, Row, Col, Button, Image, Panel, ControlLabel, FormControl} from "react-bootstrap";

import ListaActividades from './ListaActividades';


class UserLoginSuccess extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
      }



    state = {
        name: '',
        idnumber: '',
        email: '',
        role_id: ''

    }

    componentDidMount(){
        let jwt = window.localStorage.getItem('jwt');

        fetch("https://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            },
        ).then(res => res.json())
        //.then(res => (console.log(res.name), this.setState({name: res.name})
        //))
            .then(res => {
                this.setState({
                    name: res.name,
                    idnumber: res.idnumber,
                    email: res.email,
                    role_id: res.role_id
                })
            })
    }


    render() {
        
        function FieldGroup({ id, label, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <br></br>
                <br></br>
                <FormControl {...props} />
                <br></br>
              </FormGroup>
            );
          }

        return (

          <div className="UserLoginSuccess">
            <br></br>
                <div className="container">
            {/*========================================================================================*/}
            <Jumbotron className="DatosInicio">
                <Row>
                    <Col xs={12} md={3} className="BotonCerrarSesion">
                        <div >
                            <Button bsStyle ="danger">
                                <Link to='/'>CERRAR SESIÓN</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>

                <br></br>

                <Row>    
                    <Col xs={12} md={3} className="BotonCerrarSesion">
                        <Image className="LogoUserIn" width={150} height={150} src={require('../resources/LogoUsuario.jpg')} rounded/>
                    </Col>
                    
                    <Col xs={12} md={4}>
                        <h3> 
                            <div className="LabelRol">
                                <Label> ROL :</Label> 
                            </div>
                              
                            <div>
                                {this.state.role_id == "1"? "ROL ADMINISTRADOR": this.state.role_id == "2"? "ROL ESTUDIANTE": "ROL AUTORIDAD TRADICIONAL"}

                            </div>
                        </h3>

                        <h3>
                            <div className="LabelNombre">
                                <Label> NOMBRE :</Label> 
                            </div>

                            <div>
                                {this.state.name}
                            </div>
                            
                        </h3>
                    </Col>


                    <Col xs={12} md={5}> 
                        <h3>
                            <div className="LabelId">
                                <Label> ID :</Label> 
                            </div>
                            <div>
                                {this.state.idnumber}
                            </div>
                        </h3>
                    </Col>
                    
                </Row>
            </Jumbotron>
            {/*========================================================================================*/}


            <Row>
            {/*========================================================================================*/}
            <Col xs={12} md={4} className="OpcionesMenu">
               
                
               
            </Col>
            {/*========================================================================================*/}


            {/*========================================================================================*/}
            <Col xs={12} md={8} className="DatosMenu">



               
            </Col>
            {/*========================================================================================*/}
            </Row>

           
            

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={4} >

                        <Panel className="Ventana Menuuu"> 
                            
                            <Panel.Heading className="ColorTitulo">
                                <Panel.Title> 
                                    <h2> MENÚ </h2>
                                </Panel.Title>
                            </Panel.Heading>

                            <Panel.Body>    
                            <Nav stacked>
                                <NavItem className="BordesMenuItem" eventKey="first">Datos Personales</NavItem>
                                <br></br>
                                <NavItem className="BordesMenuItem" eventKey="second">Proyectos</NavItem>
                                <br></br>
                                <NavItem className="BordesMenuItem" eventKey="third">Actividades</NavItem>
                                <br></br>
                            </Nav>

                            </Panel.Body>
                            
                        </Panel>
                       

                    </Col>
                    <Col sm={8}>
                    <Tab.Content animation>
                       
                        <Tab.Pane eventKey="first">
                        {/*===================================================================================== */} 
                        {/* PESTANA DE DATOS PERSONALES */}
                        {/*===================================================================================== */}
                            <Jumbotron className="Ventana">
                                    {/*<FormGroup controlId="formValidationSuccess1" >*/}
                                    <Row className="BordesLaterales">    
                                        <Row>
                                            <Col xs={12} md={6}>
                                                
                                                <br></br>
                                                <ControlLabel>NOMBRES:</ControlLabel>
                                                <FormControl className="centrarNombre" disabled type="text" value={this.state.name}/>

                                                <br></br>

                                                <ControlLabel>IDENTIFICACIÓN:</ControlLabel>
                                                <FormControl className="centrarIdnumber" disabled type="text" value={this.state.idnumber}/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <br></br>
                                                <ControlLabel>E-MAIL:</ControlLabel>
                                                <FormControl className="centrarEmail" disabled type="text" value={this.state.email}/>

                                                <br></br>

                                                <ControlLabel>DIRECCIÓN:</ControlLabel>
                                                <FormControl disabled type="text" />

                                                <br></br>

                                                <ControlLabel>UNIVERSIDAD:</ControlLabel>
                                                <FormControl disabled type="text" />
                                            </Col>
                                        </Row>

                                        <br></br>

                                        <Row>
                                            <Col xs={12} md={12} className="BotonesDatos">
                                                <Button bsStyle ="success">Actualizar Datos</Button>
                                                {' '}
                                                <Button disabled bsStyle ="danger">Cancelar</Button>
                                            </Col>
                                        </Row>
                                    </Row>
                                    {/*</FormGroup>*/}
                            </Jumbotron>
                        {/*===================================================================================== */}
                        </Tab.Pane>
                        


                        <Tab.Pane eventKey="second">
                        {/*===================================================================================== */} 
                        {/* PESTANA DE DATOS PERSONALES */}
                        {/*===================================================================================== */}

                            <Jumbotron className="Ventana">
                                <Row className="BordesLaterales VentanasArchivo">
                                    <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                    <Row className="clearfix">
                                        <Col sm={12}>
                                        <Nav bsStyle="tabs">
                                            <NavItem eventKey="first"> 
                                                <ControlLabel>NUEVO DOCUMENTO</ControlLabel>
                                            </NavItem>
                                            <NavItem eventKey="second">
                                                <ControlLabel>DOCUMENTOS SUBIDOS</ControlLabel>
                                            </NavItem>
                                        
                                        </Nav>
                                        </Col>
                                        <Col sm={12}>
                                        <Tab.Content animation>
                                            <Tab.Pane eventKey="first">
                                                <Row className="CentrarSubirArchivos">
                                                <br></br>
                                                <br></br>
                                                    <FieldGroup className="CentrarArchivos" id="formControlsFile" type="file" label="ADJUNTAR NUEVO DOCUMENTO" />
                                                </Row>

                                                <Row>
                                                    <Col xs={12} md={12} className="BotonesSubirDocumento">
                                                        <Button bsStyle ="success">Enviar Documento</Button>
                                                        {' '}
                                                        <Button disabled bsStyle ="danger">Borrar</Button>
                                                    </Col>
                                                </Row>
                                                
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                <br></br>
                                                
                                                <Table className="Letra" striped bordered condensed hover>
                                                    <thead>
                                                        <tr>
                                                        <th>#</th>
                                                        <th>Documento</th>
                                                        <th>Fecha Envío</th>
                                                        <th>Estado</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <td>1</td>
                                                        <td>revision_1.doc</td>
                                                        <td>01/01/2018</td>
                                                        <td>APROBADO</td>
                                                        </tr>
                                                        <tr>
                                                        <td>2</td>
                                                        <td>revision_3.doc</td>
                                                        <td>01/03/2018</td>
                                                        <td>APROBADO</td>
                                                        </tr>
                                                        <tr>
                                                        <td>3</td>
                                                        <td>revision_3.doc</td>
                                                        <td>01/06/2018</td>
                                                        <td>PENDIENTE</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>            

                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                    </Tab.Container>
                                </Row>
                            </Jumbotron>

                        {/*===================================================================================== */}
                        </Tab.Pane>


                        <Tab.Pane eventKey="third">
                        {/*===================================================================================== */} 
                        {/* PESTANA DE DATOS PERSONALES */}
                        {/*===================================================================================== */}
                        
                            <ListaActividades/>

                           {/*
                            <Jumbotron className="Ventana">
                                <Row>
                                    <Col xs={12} md={1}>
                                        <Button  bsStyle ="success">Filtrar</Button>
                                    </Col>
                                    <Col xs={12} md={3}>
                                    <FormGroup controlId="formControlsSelect">
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">Todo</option>
                                            <option value="1">Eventos</option>
                                            <option value="2">Asesorias</option>
                                            <option value="3">Publicaciones</option>
                                        </FormControl>
                                    </FormGroup>
                                    </Col>
                                </Row>

                                <Panel id="collapsible-panel-example-2" >
                                    <Panel.Heading>
                                        <Panel.Title toggle>
                                            <Link to='/publicaciones'>LISTA EVENTOS</Link>
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Collapse>
                                        <Panel.Body>
                                        <div className="MiTexto">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                            ea proident.
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <Button  bsStyle ="info">Mas Información</Button>
                                        </Panel.Body>  
                                    </Panel.Collapse>
                                </Panel>

                                <Panel id="collapsible-panel-example-2" >
                                    <Panel.Heading>
                                        <Panel.Title toggle>
                                            <Link to='/estadosdocumento'>LISTA ESTADOS DOCUMENTOS</Link>
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Collapse>
                                        <Panel.Body>
                                        <div className="MiTexto">s
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                            ea proident.
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <Button  bsStyle ="info">Mas Información</Button>
                                        </Panel.Body>  
                                    </Panel.Collapse>
                                </Panel>

                                <Panel id="collapsible-panel-example-2" >
                                    <Panel.Heading>
                                        <Panel.Title toggle>
                                            EVENTO 33
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Collapse>
                                        <Panel.Body >
                                        <div className="MiTexto">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                            ea proident.
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <Button  bsStyle ="info">Mas Información</Button>
                                        </Panel.Body>  
                                    </Panel.Collapse>
                                </Panel>
                            </Jumbotron>
                            */}
                        
                        {/*===================================================================================== */}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

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
            
           

          </div>

        );

    }
}

export default UserLoginSuccess;
