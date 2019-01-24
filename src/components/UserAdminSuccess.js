import React, { Component } from 'react';
import axios from 'axios';
import '../styles/UserAdminSuccess.css';
import {Link} from 'react-router-dom';
import { PanelGroup, Modal, Table, FormGroup, Nav, NavItem, Tab, Jumbotron, Label, Row, Col, Button, Image, Panel, ControlLabel, FormControl} from "react-bootstrap";

class UserAdminSuccess extends Component {

    constructor(props) {
        
        super(props);
    
        this.state = {
            show: false,
            open: false,
            name: "",
            id_number: "",
            email: "",
            id_rol: "",
            body: "",
            id_publicacion: "",
            eventos: [],
            publicaciones: [],
            asesorias: [],
            actividades: []
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.colocarEventos = this.colocarEventos.bind(this);
        this.colocarAsesorias = this.colocarAsesorias.bind(this);
        this.colocarPublicaciones = this.colocarPublicaciones.bind(this);
        this.colocarTodosLosEventos = this.colocarTodosLosEventos.bind(this);
    }

    colocarEventos() {
        this.setState({ buscarFiltros: "publications_events" });
        this.forceUpdate();
        console.log(this.state.buscarFiltros);
    }

    colocarPublicaciones() {
        this.setState({ buscarFiltros: "publications_publications" });
        this.forceUpdate();
        console.log(this.state.buscarFiltros);
    }

    colocarAsesorias() {
        this.setState({ buscarFiltros: "publications_consultancies" });
        this.forceUpdate();
        console.log(this.state.buscarFiltros);
    }

    colocarTodosLosEventos() {
        this.setState({ buscarFiltros: "publications" });
        this.forceUpdate();
        console.log(this.state.buscarFiltros);
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

    handleChangeId = event => {
        const id = event.target.value;
        this.setState({ id });
    }

    handleChangeBody = event => {
        const body = event.target.value;
        this.setState({ body });
    }

    handleChangePublication_id = event => {
        const id_publicacion = event.target.value;
        this.setState({ id_publicacion });
    }
    
    componentDidMount(){
        let jwt = window.localStorage.getItem('jwt');

        fetch("https://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            }
        ).then(res => res.json())
            //.then(res => (console.log(res.name), this.setState({name: res.name})
            //))
            .then(res => { 
                
                console.log( res.role_id + " -- " + res.name + " -- " + res.idnumber + " -- " + res.email );

                const id_rol = res.role_id;
                this.setState({ id_rol });

                const name = res.name;
                this.setState({ name });

                const id_number = res.idnumber;
                this.setState({ id_number });

                const email = res.email;
                this.setState({ email });
            })
    }

    //-----------------------------------------------------------------------------------------------
    //Endpoint para crear comentarios - publication_id = 1
    //-----------------------------------------------------------------------------------------------

    handleSubmit = event => {
        let jwt = window.localStorage.getItem('jwt');

        event.preventDefault();

        const coment = {
            id: this.state.id,
            body: this.state.body,
            id_publicacion: this.state.id_publicacion            
        };

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt,
        }


        axios.post(`https://unipastas-back.herokuapp.com/publications/1/comments`, { id: this.state.id, body: this.state.body, id_publicacion: this.state.publication_id }, {headers:headers})

            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    componentWillMount(){
        
        let jwt = window.localStorage.getItem('jwt');
        //-----------------------------------------------------------------------------------------------
        //Endpoint para listar comentarios - publication_id = 1
        //-----------------------------------------------------------------------------------------------
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          .then(response => {
            let actividades = response.data.slice();
            this.setState({ actividades })
          })
          .catch(function (error) {
              console.log(error);
          });



        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_events',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          .then(response => {
            let eventos = response.data.slice();
            this.setState({ eventos })
          })
          .catch(function (error) {
              console.log(error);
          });



        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_publications',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          .then(response => {
            let publicaciones = response.data.slice();
            this.setState({ publicaciones })
          })
          .catch(function (error) {
              console.log(error);
          });



          axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_consultancies',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          .then(response => {
            let asesorias = response.data.slice();
            this.setState({ asesorias })
          })
          .catch(function (error) {
              console.log(error);
          });
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


        const ListaDeEventos = this.state.eventos.map((eventos) => {
            var fecha = new Date(eventos.startdate);
            var year = fecha.getFullYear();
            var mes = fecha.getMonth()
            var dia = fecha.getDate();
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();


            // ==========================================================================================
            // ==========================================================================================
            return (
                <div > 
                    <Panel className="EsUnEvento2" eventKey={ eventos.id }>
                        <Panel.Heading  className="EsUnEvento">
                            <Panel.Title toggle>{ eventos.name }</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                { eventos.description }
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
                                    <Modal.Title>{ eventos.name }</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  className = "AgrandarLetra">
                                    <div>
                                        DESCRIPCIÓN:
                                    </div>
                                    <div>
                                        { eventos.description }
                                    </div>
                                    <br/>
                                    <br/>
                                    <div>
                                        <p> Fecha: {dia} / {mes} / {year}</p>
                                        <p> Hora: {hora} : {minutos}</p>
                                        <p> Lugar: {eventos.place} </p>
                                        <p> Ubicacion: ({eventos.latitude} , {eventos.longitude} )</p> 
                                    </div>

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
                </div>
            )

        })
        // ==========================================================================================
        // ==========================================================================================



        // ==========================================================================================
        // ==========================================================================================
        const ListaDeActividades = this.state.actividades.map((actividad) => {
            var fecha = new Date(actividad.startdate);
            var year = fecha.getFullYear();
            var mes = fecha.getMonth()
            var dia = fecha.getDate();
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();


            // ==========================================================================================
            // ==========================================================================================
            return (
                <div> 

                    <Panel className={actividad.type_publication_id == 1? "EsUnEvento2": actividad.type_publication_id == 2? "EsUnaPublicacion2": "EsUnaAsesoria2"} eventKey={ actividad.id }>
                        <Panel.Heading className={actividad.type_publication_id == 1? "EsUnEvento": actividad.type_publication_id == 2? "EsUnaPublicacion": "EsUnaAsesoria"}>
                            <Panel.Title toggle>{ actividad.name }</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                { actividad.description }
                            </p>

                            <hr></hr>

                            {/* =================================================================  */}
                            {/* BOTON PARA MOSTRAR MAS INFORMACION DE LA ACTIVIDAD SELECCIONADA */}
                            <div className="BotonMasInformacion">
                                <Button bsStyle="info" bsSize="medium" onClick={this.handleShow}>
                                    Más información
                                </Button>
                            </div>

                            {/* =================================================================  */}
                            {/* SE MUESTRA LA INFORMACION COMPLETA DE LA ACTIVIDAD */}
                            <Modal className="AjustartLetra" show={this.state.show} onHide={this.handleClose}>
                            <div >
                                <Modal.Header  closeButton>
                                    <Modal.Title>{ actividad.name }</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  className = "AgrandarLetra">
                                    <div>
                                        DESCRIPCIÓN:
                                    </div>
                                    <div>
                                        { actividad.description }
                                    </div>
                                    <br/>
                                    <br/>
                                    <div>
                                        <p> Fecha: {dia} / {mes} / {year}</p>
                                        <p> Hora: {hora} : {minutos}</p>
                                        <p> Lugar: {actividad.place} </p>
                                        <p> Ubicacion: ({actividad.latitude} , {actividad.longitude} )</p> 
                                    </div>

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

                </div>
            )

        })
        // ==========================================================================================
        // ==========================================================================================




        const ListaDePublicaciones = this.state.publicaciones.map((publicaciones) => {
            var fecha = new Date(publicaciones.startdate);
            var year = fecha.getFullYear();
            var mes = fecha.getMonth()
            var dia = fecha.getDate();
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();


            // ==========================================================================================
            // ==========================================================================================
            return (
                <div> 

                    <Panel className="EsUnaPublicacion2" eventKey={ publicaciones.id }>
                        <Panel.Heading className="EsUnaPublicacion">
                            <Panel.Title toggle>{ publicaciones.name }</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                { publicaciones.description }
                            </p>

                            <hr></hr>

                            {/* =================================================================  */}
                            {/* BOTON PARA MOSTRAR MAS INFORMACION DE LA ACTIVIDAD SELECCIONADA */}
                            <div className="BotonMasInformacion">
                                <Button bsStyle="info" bsSize="medium" onClick={this.handleShow}>
                                    Más información
                                </Button>
                            </div>

                            {/* =================================================================  */}
                            {/* SE MUESTRA LA INFORMACION COMPLETA DE LA ACTIVIDAD */}
                            <Modal className="AjustartLetra" show={this.state.show} onHide={this.handleClose}>
                            <div >
                                <Modal.Header  closeButton>
                                    <Modal.Title>{ publicaciones.name }</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  className = "AgrandarLetra">
                                    <div>
                                        DESCRIPCIÓN:
                                    </div>
                                    <div>
                                        { publicaciones.description }
                                    </div>
                                    <br/>
                                    <br/>
                                    <div>
                                        <p> Fecha: {dia} / {mes} / {year}</p>
                                        <p> Hora: {hora} : {minutos}</p>
                                        <p> Lugar: {publicaciones.place} </p>
                                        <p> Ubicacion: ({publicaciones.latitude} , {publicaciones.longitude} )</p> 
                                    </div>

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
                </div>
            )
        })
        // ==========================================================================================
        // ==========================================================================================



        const ListaDeAsesorias = this.state.asesorias.map((asesorias) => {
            var fecha = new Date(asesorias.startdate);
            var year = fecha.getFullYear();
            var mes = fecha.getMonth()
            var dia = fecha.getDate();
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();


            // ==========================================================================================
            // ==========================================================================================
            return (
                <div> 

                    <Panel className="EsUnaAsesoria2" eventKey={ asesorias.id }>
                        <Panel.Heading className="EsUnaAsesoria">
                            <Panel.Title toggle>{ asesorias.name }</Panel.Title>
                        </Panel.Heading>

                        <Panel.Body collapsible>
                            <p>
                                { asesorias.description }
                            </p>

                            <hr></hr>

                            {/* =================================================================  */}
                            {/* BOTON PARA MOSTRAR MAS INFORMACION DE LA ACTIVIDAD SELECCIONADA */}
                            <div className="BotonMasInformacion">
                                <Button bsStyle="info" bsSize="medium" onClick={this.handleShow}>
                                    Más información
                                </Button>
                            </div>
                            <br></br>
                   
                            {/* =================================================================  */}
                            {/* SE MUESTRA LA INFORMACION COMPLETA DE LA ACTIVIDAD */}
                            <Modal className="AjustartLetra" show={this.state.show} onHide={this.handleClose}>
                            <div >
                                <Modal.Header  closeButton>
                                    <Modal.Title>{ asesorias.name }</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  className = "AgrandarLetra">
                                    <div>
                                        DESCRIPCIÓN:
                                    </div>
                                    <div>
                                        { asesorias.description }
                                    </div>
                                    <br/>
                                    <br/>
                                    <div>
                                        <p> Fecha: {dia} / {mes} / {year}</p>
                                        <p> Hora: {hora} : {minutos}</p>
                                        <p> Lugar: {asesorias.place} </p>
                                        <p> Ubicacion: ({asesorias.latitude} , {asesorias.longitude} )</p> 
                                    </div>

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
                   
                </div>
                
            )
        })
        // ==========================================================================================
        // ==========================================================================================




        return (

          <div className="UserAdminSuccess">
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
                                { this.state.id_rol == 1 ? "Administrador": this.state.id_rol == 2 ? "Usuario Estandar" : "Autoridad" }
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
                                                <ControlLabel>NOMBRE:</ControlLabel>
                                                <FormControl className="CentrarTexto" disabled type="text" value={ this.state.name }/>

                                                <br></br>

                                                <ControlLabel>CÉDULA:</ControlLabel>
                                                <FormControl className="CentrarTexto" disabled type="text" value={ this.state.id_number }/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <br></br>
                                                <ControlLabel>E-MAIL:</ControlLabel>
                                                <FormControl className="CentrarTexto" disabled type="text" value={ this.state.email }/>

                                                <br></br>

                                                <ControlLabel>UNIVERSIDAD:</ControlLabel>
                                                <FormControl className="CentrarTexto" disabled type="text" value={ "###########" }/>
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
                        {/* PESTANA DE SUBIR DOCUMENTOS Y ESTADO DE LOS DOCUMENTOS */}
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
                        {/* PESTANA DE LA LISTA DE LAS ACTIVIDADES */}
                        {/*===================================================================================== */}
                        

                        <Jumbotron className="Ventana">
                                <Row className="BordesLaterales VentanasArchivo">
                                    <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                                    <Row className="clearfix">
                                        <Col sm={12}>
                                        <Nav bsStyle="tabs">
                                            <NavItem className="ListaActividades" eventKey="first"> 
                                                <ControlLabel >ACTIVIDADES</ControlLabel>
                                            </NavItem>
                                            <NavItem className="ListaEventos" eventKey="second">
                                                <ControlLabel>EVENTOS</ControlLabel>
                                            </NavItem>
                                            <NavItem className="ListaAsesorias" eventKey="third">
                                                <ControlLabel>ASERORIAS</ControlLabel>
                                            </NavItem>
                                            <NavItem className="ListaPublicaciones" eventKey="fourth">
                                                <ControlLabel>PUBLICACIONES</ControlLabel>
                                            </NavItem>
                                        </Nav>
                                        </Col>

                                        <Col sm={12}>
                                        <Tab.Content animation>
                                            <Tab.Pane eventKey="first">

                                                <Jumbotron className="ArregloActividades">
                                                    <PanelGroup accordion id="CargarActividades" >
                                                        {ListaDeActividades}
                                                    </PanelGroup>
                                                </Jumbotron>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                
                                                <Jumbotron className="ArregloActividades">
                                                    <PanelGroup accordion id="CargarActividades" >
                                                        {ListaDeEventos}
                                                    </PanelGroup>
                                                </Jumbotron>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                
                                                <Jumbotron className="ArregloActividades">
                                                    <PanelGroup accordion id="CargarActividades" >
                                                        {ListaDeAsesorias}
                                                    </PanelGroup>
                                                </Jumbotron>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="fourth">
                                                
                                                <Jumbotron className="ArregloActividades">
                                                    <PanelGroup accordion id="CargarActividades" >
                                                        {ListaDePublicaciones}
                                                    </PanelGroup>
                                                </Jumbotron>

                                            </Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                    </Tab.Container>
                                </Row>
                            </Jumbotron>


                       
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

export default UserAdminSuccess;