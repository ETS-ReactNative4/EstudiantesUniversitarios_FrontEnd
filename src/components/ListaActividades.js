import React, { Component } from 'react';
import '../styles/ListaActividades.css';
import { Label, Col, Row, FormControl, Button, Modal, Panel, PanelGroup, Jumbotron} from "react-bootstrap";


class ListaActividades extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false,
          open: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      handleHide() {
        this.setState({ show: false });
      }

    render() {


        return (

          <div className="ListaActividades">

            <Jumbotron className="ArregloActividades">

                <PanelGroup accordion id="CargarActividades" >
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>TITULO DE ACTIVIDAD 1</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                ESTE ES UN PEQUEÑO TEXTO DE PRUEBA PARA
                                PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                            </p>

                            <hr></hr>

                            {/* =================================================================  */}
                            {/* BOTON PARA MOSTRAR MAS INFORMACION DE LA ACTIVIDAD SELECCIONADA */}
                            <div className="BotonMasInformacion">
                                <Button bsStyle="success" bsSize="medium" onClick={this.handleShow}>
                                    Más información
                                </Button>
                            </div>

                            {/* =================================================================  */}
                            {/* SE MUESTRA LA INFORMACION COMPLETA DE LA ACTIVIDAD */}
                            <Modal className="AjustartLetra" show={this.state.show} onHide={this.handleClose}>
                            <div >
                                <Modal.Header  closeButton>
                                    <Modal.Title>TITULO COMPLETO DE ACTIVIDAD 1</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <hr></hr>

                                    {/* =================================================================  */}
                                    {/* SE CARGAN LOS COMENTARIOS DE LA ACTIVIDAD */}
                                    <PanelGroup accordion id="CargarComentarios" >
                                        <Panel eventKey="11">
                                            <Panel.Heading>
                                                <Panel.Title toggle> COMENTARIOS </Panel.Title>
                                            </Panel.Heading>

                                            <Panel.Body collapsible>
                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                {/* =================================================================  */}
                                                {/* CAMPO PARA REALIZAR UN NUEVO COMENTARIO */}
                                                <PanelGroup>    
                                                    <Button className="RedondearBoton" bsStyle="success" onClick={() => this.setState({ open: !this.state.open })}>
                                                        + Nuevo Comentario
                                                    </Button>
                                                    <br></br>
                                                    <br></br>
                                                    <Panel accordion id="NuevoComentario" expanded={this.state.open}>
                                                        <Panel.Collapse>
                                                            <Panel.Body>
                                                                <FormControl componentClass="textarea" placeholder="Escribir comentario..." />
                                                            <br></br>
                                                            <div className="BotonPublicarComentario">
                                                                <Button className="RedondearBoton" bsStyle="info">
                                                                    Enviar comentario
                                                                </Button>
                                                            </div>
                                                            </Panel.Body>
                                                        </Panel.Collapse>
                                                    </Panel>
                                                </PanelGroup>
                                                {/* =================================================================  */}

                                            </Panel.Body>
                                        </Panel>

                                    </PanelGroup>

                                </Modal.Body>
                                
                                <Modal.Footer>
                                    <Button onClick={this.handleHide}>Close</Button>
                                </Modal.Footer>
                            </div>
                            </Modal>
                            {/* =================================================================  */}

                            {/* =================================================================  */}

                        </Panel.Body>
                    </Panel>

                    <Panel eventKey="2">
                    <Panel.Heading>
                            <Panel.Title toggle>TITULO DE ACTIVIDAD 2</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                ESTE ES UN PEQUEÑO TEXTO DE PRUEBA PARA
                                PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                            </p>

                            <hr></hr>

                            {/* =================================================================  */}
                            {/* BOTON PARA MOSTRAR MAS INFORMACION DE LA ACTIVIDAD SELECCIONADA */}
                            <div className="BotonMasInformacion">
                                <Button bsStyle="success" bsSize="medium" onClick={this.handleShow}>
                                    Más información
                                </Button>
                            </div>

                            {/* =================================================================  */}
                            {/* SE MUESTRA LA INFORMACION COMPLETA DE LA ACTIVIDAD */}
                            <Modal className="AjustartLetra" show={this.state.show} onHide={this.handleClose}>
                            <div >
                                <Modal.Header  closeButton>
                                    <Modal.Title>TITULO COMPLETO DE ACTIVIDAD 1</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <p>
                                        ESTE ES UN TEXTO COMPLETO DE PRUEBA PARA
                                        PROBAR COMO SE VE EL TEXTO COMPLETO DE LA
                                        ACTIVDAD QUE SE TIENE QUE MOSTRAR.
                                    </p>

                                    <hr></hr>

                                    {/* =================================================================  */}
                                    {/* SE CARGAN LOS COMENTARIOS DE LA ACTIVIDAD */}
                                    <PanelGroup accordion id="CargarComentarios" >
                                        <Panel eventKey="22">
                                            <Panel.Heading>
                                                <Panel.Title toggle> COMENTARIOS </Panel.Title>
                                            </Panel.Heading>

                                            <Panel.Body collapsible>
                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                    <Row>
                                                        <Col xs={12} md={3}>
                                                            <Label>Nombre usuario</Label>
                                                        </Col>

                                                        <Col className="AjustartTexto" xs={12} md={9}>
                                                            <p>
                                                                este es el comentario jfasj dfkas dkflas
                                                                sadfasdf sdf sdf a srgadga sdf sdf sadfasdf asdf
                                                                as asdf asdf s fasd sdfsdf sf sgdasdf sd sdfasd
                                                                asdf asdfsdfsdfsd fasd fsdf asdf sdf asdf
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                <hr></hr>

                                                {/* =================================================================  */}
                                                {/* CAMPO PARA REALIZAR UN NUEVO COMENTARIO */}
                                                <PanelGroup>    
                                                    <Button className="RedondearBoton" bsStyle="success" onClick={() => this.setState({ open: !this.state.open })}>
                                                        + Nuevo Comentario
                                                    </Button>
                                                    <br></br>
                                                    <br></br>
                                                    <Panel accordion id="NuevoComentario" expanded={this.state.open}>
                                                        <Panel.Collapse>
                                                            <Panel.Body>
                                                                <FormControl componentClass="textarea" placeholder="Escribir comentario..." />
                                                            <br></br>
                                                            <div className="BotonPublicarComentario">
                                                                <Button className="RedondearBoton" bsStyle="info">
                                                                    Enviar comentario
                                                                </Button>
                                                            </div>
                                                            </Panel.Body>
                                                        </Panel.Collapse>
                                                    </Panel>
                                                </PanelGroup>
                                                {/* =================================================================  */}

                                            </Panel.Body>
                                        </Panel>

                                    </PanelGroup>

                                </Modal.Body>
                                
                                <Modal.Footer>
                                    <Button onClick={this.handleHide}>Close</Button>
                                </Modal.Footer>
                            </div>
                            </Modal>
                            {/* =================================================================  */}

                            {/* =================================================================  */}

                        </Panel.Body>


                    </Panel>
                </PanelGroup>

            </Jumbotron>

          </div>

        );

    }
}

export default ListaActividades;
