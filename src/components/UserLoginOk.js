import React, { Component } from 'react';
import '../styles/UserLoginOk.css';
import {Link} from 'react-router-dom';
import { Table, FormGroup, Nav, NavItem, Tab, Jumbotron, Label, Row, Col, Button, Image, Panel, ListGroup, ListGroupItem,  ControlLabel, FormControl} from "react-bootstrap";



class UserLoginOk extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
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

          <div className="UserLoginOk">

                <div className="container">
            {/*========================================================================================*/}
            <Jumbotron className="DatosInicio">
                <Row>
                    <Col xs={12} md={4} className="BotonCerrarSesion">
                        <div >
                            <Button bsStyle ="danger">
                                <Link to='/'>CERRAR SESIÓN</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>

                <br></br>

                <Row>    
                    <Col xs={12} md={4} className="BotonCerrarSesion">
                        <Image className="LogoUserIn" src={require('../resources/LogoUser.png')} rounded/>
                    </Col>
                    
                    <Col xs={12} md={4}>
                        <h3> 
                            <div className="LabelRol">
                                <Label> ROL :</Label> 
                            </div>

                            <div>
                                Usuario estantar
                            </div>
                        </h3>

                        <h3>
                            <div className="LabelNombre">
                                <Label> NOMBRE :</Label> 
                            </div>

                            <div>
                                Fulanito Perez
                            </div>
                            
                        </h3>
                    </Col>


                    <Col xs={12} md={4}> 
                        <h3>
                            <div className="LabelId">
                                <Label> ID :</Label> 
                            </div>
                            <div>
                                123456
                            </div>
                        </h3>
                    </Col>
                    
                </Row>
            </Jumbotron>
            {/*========================================================================================*/}


            <Row>
            {/*========================================================================================*/}
            <Col xs={12} md={4} className="OpcionesMenu">
               
                <Panel>
                    <Panel.Heading>
                        <Panel.Title > 
                             <h2> MENÚ </h2>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <ListGroup>
                        <ListGroupItem>
                            <h3>
                                Datos Personales
                            </h3>
                        </ListGroupItem>
                        
                        <ListGroupItem>
                            <h3>
                                Proyectos
                            </h3>
                        </ListGroupItem>
                        
                        <ListGroupItem>
                            <h3>
                                Actividades
                            </h3>
                        </ListGroupItem>
                    </ListGroup>
                    </Panel.Body>
                </Panel>
               
            </Col>
            {/*========================================================================================*/}


            {/*========================================================================================*/}
            <Col xs={12} md={8} className="DatosMenu">
                <Jumbotron>
                        {/*<FormGroup controlId="formValidationSuccess1" >*/}
                        <Row className="BordesLaterales">    
                            <Row>
                                <Col xs={12} md={6}>
                                    <ControlLabel>NOMBRE:</ControlLabel>
                                    <FormControl disabled type="text" />

                                    <br></br>

                                    <ControlLabel>APELLIDO:</ControlLabel>
                                    <FormControl disabled type="text" />

                                    <br></br>

                                    <ControlLabel>CÉDULA:</ControlLabel>
                                    <FormControl disabled type="text" />
                                </Col>

                                <Col xs={12} md={6}>
                                    <ControlLabel>E-MAIL:</ControlLabel>
                                    <FormControl disabled type="text" />

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

                <Jumbotron>
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
                                    
                                    <Table striped bordered condensed hover>
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

                <Jumbotron>
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
                            Evento Prueba 1
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        <br></br>
                        <Button  bsStyle ="info">Mas Información</Button>
                        </Panel.Body>  
                    </Panel.Collapse>
                </Panel>
                    
                </Jumbotron>
            </Col>
            {/*========================================================================================*/}
            </Row>

            <br></br>
            <br></br>
            <br></br>
            

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={4}>
                    <Nav bsStyle="pills" stacked>
                        <NavItem eventKey="first">Tab 1</NavItem>
                        <NavItem eventKey="second">Tab 2</NavItem>
                    </Nav>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content animation>
                        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

            </div>
          </div>

        );

    }
}

export default UserLoginOk;
