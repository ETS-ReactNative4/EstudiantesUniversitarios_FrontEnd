import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/NewBarHome.css';
import { Button, Jumbotron, Row, Col, Image, Panel } from "react-bootstrap";
import UniversityPage from './UniversityPage';
import ContactPage from './ContactPage';


class NewBarHome extends Component {

  render() {

    return (

        <div className="NewBarHome container">
        
        <br></br>

        <Panel className="Todooo">


            {/*========================================================================================*/}
            <div className="Cabezera">
                <Panel.Heading >
                    <Row className="AlinearBotones">
                            <Button className="BotonInicarSesion" type="submit">
                                <Link to='/LoginPage'>Inicar Sesión</Link>
                            </Button>
                            {' '}
                            <Button className="BotonRegistarse" type="submit">
                                <Link to='/RegisterPage'>Resgistrarse</Link>
                            </Button>
                    </Row>
                </Panel.Heading>
            </div>
           {/*========================================================================================*/}      



           {/*========================================================================================*/}
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
                        Organización De Estdiantes Universitarios Del Resguardo De Pastas
                    </h3>
               </Col>

               <Col xs={12} md={2}>
                    <br></br>
                    <br></br>
                    <Image className="Imagenes" width={100} height={100} alt="100x100" src={require('../resources/emblema.jpg')} />
               </Col>
              
            </Row>
           </Jumbotron>
           {/*========================================================================================*/}
           
          
          <Panel.Body>

            {/*========================================================================================*/}
            <Jumbotron className="Contenedores">
                <Row>
                    <Col xs={12} md={6} className="ContenedorQuienesSomosImagen">
                        <Image className="Imagenes" src={require('../resources/pastas1.jpg')} responsive  thumbnail/>
                    </Col>

                    <Col xs={12} md={6}>
                        <Jumbotron className="panel1">
                            <div className="MiniContenedorTitulo">
                                <h1>¿QUIENES SOMOS?</h1>
                            </div>
                            
                            <br></br>
                            <h4> Organizacion de estudiantes universitarios conservando nuestra identidad cultural!</h4>
                            <br></br>
                            <h4> La organización de estudiantes indígenas universitarios va encaminada a la integración de indígenas estudiantes regulares, egresados y titulados de las diferentes Universidades públicas o privadas del país, con el propósito de promover la recuperación, protección y conservación de la identidad cultural, por medio de mingas de trabajo, mingas de pensamiento, tulpas donde compartamos los saberes que nuestros mayores nos dan como herencia y promoverlos de generación en generación, así mismo luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes indígenas poseemos</h4>
                            <p></p>            
                        </Jumbotron>
                    </Col>
                </Row>
            </Jumbotron>
            {/*========================================================================================*/}



            {/*========================================================================================*/}
            <Jumbotron className="Contenedores">
                <Row>
                    <Col xs={12} md={6}>
                        <Jumbotron className="panel1">
                            <br></br>
                            
                            <div className="MiniContenedorTitulo">
                                <h1>VISIÓN</h1>
                            </div>
                            
                            <br></br>
                            <h4> La protección y conservación del territorio.</h4>
                            <br></br>
                            <h4> Contribuir continuamente al fortalecimiento de la identidad cultural, el saber propio, los usos y costumbres.</h4>
                            <br></br>
                            <h4> Consolidarse como Cabildo 1 menor de estudiantes indígenas universitarios del Resguardo Indigena de Pastas Aldana.</h4>
                        </Jumbotron>
                    </Col>

                    <Col xs={12} md={6} className="ContenedorVisionImagen">
                        <Image className="Imagenes" src={require('../resources/pastas3.jpeg')} responsive thumbnail />
                    </Col>
                </Row>
            </Jumbotron>
            {/*========================================================================================*/}



            {/*========================================================================================*/}
            <Jumbotron className="Contenedores">
                <Row>
                    <Col xs={12} md={6} className="ContenedorMisionImagen">
                        <Image className="Imagenes" src={require('../resources/pastas10.jpg')} responsive thumbnail/>
                    </Col>

                    <Col xs={12} md={6}>
                        <Jumbotron className="panel1">
                            <br></br>

                            <div className="MiniContenedorTitulo">
                                <h1>MISIÓN</h1>
                            </div>
                        
                            <br></br>

                            <h4>Integración de Estudiantes Indigenas Universitarios.</h4>
                            <br></br>
                            <h4>Promover la recuperación, protección y conservación de la identidad cultural.</h4>
                            <br></br>
                            <h4>Luchar por los derechos, beneficios y oportunidades de progreso que como jóvenes indígenas poseemos.</h4>            
                        </Jumbotron>
                    </Col>
                </Row>
            </Jumbotron>
            {/*========================================================================================*/}




            {/*========================================================================================*/}
            
            <UniversityPage></UniversityPage>
            
            {/*========================================================================================*/}




            {/*========================================================================================*/}
            
            <ContactPage></ContactPage>

            {/*========================================================================================*/}
        </Panel.Body>

            
            <Panel.Footer className="MiFooter">
                <h3> Universidad Nacional De Colombia.  Bogota D.C. -- Colombia. 2018 </h3>
            </Panel.Footer>

        </Panel>


        {/*========================================================================================*/}


        </div>
    );

  }

}

export default NewBarHome;
