import React, { Component } from 'react';
import '../styles/UniversityPage.css';
import BarHome from "./BarHome";
import {
    Col,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    Grid,
    Panel,
    PanelGroup,
    Row,
    Thumbnail
} from "react-bootstrap";
import * as axios from "axios";


class UniversityPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            universities : [] /*almacenar los datos a consumir en api rails*/
        };
    }

    /*enviar la peticion http*/
    componentWillMount(){
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/universities',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
            }),
        })

            .then(response => {

                let universities  = response.data.slice();

                this.setState({
                    universities: universities
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const universitiesList = this.state.universities.map((university)=>{

            return (
                <Col xs={6} md={4}>
                    <Thumbnail src={require('../resources/fondo.jpg')} >
                        <PanelGroup accordion id="accordion-example">
                        <Panel eventKey={university.id} >
                            <Panel.Heading>
                                <Panel.Title toggle> Universidad: {university.name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <h4>Información</h4>
                                <Form inline>
                                    <FormGroup controlId="formInlineDepartment">
                                        <ControlLabel> Departamento:</ControlLabel>{' '}
                                        <FormControl type="text" placeholder={university.department} disabled/>
                                    </FormGroup>{' '}
                                </Form>
                                <br/>
                                <Form inline className="formInlineCiudad">
                                    <FormGroup controlId="formInlineCiudad">
                                        <ControlLabel> Ciudad:</ControlLabel>{' '}
                                        <FormControl type="text" placeholder={university.city} disabled/>
                                    </FormGroup>{' '}
                                </Form>
                            </Panel.Body>
                        </Panel>
                        </PanelGroup>
                    </Thumbnail>
                </Col>
            )
        })


        return (
          <div className={"UniversityPage"}>

              <div className={"container"}>

                  <BarHome/>

                  <Grid>
                      <Row>
                          {universitiesList}
                      </Row>
                  </Grid>

              </div>

          </div>
        );
  }
}

export default UniversityPage;
