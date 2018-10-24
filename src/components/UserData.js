import React, { Component } from 'react';
import '../styles/UserData.css';
import * as axios from "axios";
import {ControlLabel, Form, FormControl, FormGroup, Panel, PanelGroup} from "react-bootstrap";



class UserData extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : [] /*almacenar los datos a consumir en api rails*/
        };
    }

    /*enviar la peticion http*/
    componentWillMount(){
        // GET request for remote image
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/users',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
            }),
        })

            .then(response => {

                let users  = response.data.slice();

                this.setState({
                    users: users
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {

        const usersList = this.state.users.map((user)=>{
            return (
                <div>
                    {/*id = {user.id} name = {user.name} idNumber = {user.idNumber} email = {user.email} beneficiary = {String( user.beneficiary )} role_id={user.role_id}*/}
                    <Panel eventKey={user.id} >
                        <Panel.Heading>
                            <Panel.Title toggle> ID = {user.id}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            <h4>Información</h4>
                            <Form inline>
                                <FormGroup controlId="formInlineName">
                                    <ControlLabel> Nombre: </ControlLabel>{' '}
                                    <FormControl type="text" placeholder={user.name} disabled/>
                                </FormGroup>{' '}
                                <FormGroup className="spaceIdNumber" controlId="formInlineIdNumber">
                                    <ControlLabel> Id: </ControlLabel>{' '}
                                    <FormControl type="text" placeholder={user.idNumber} disabled/>
                                </FormGroup>{' '}
                            </Form>
                            <br/>
                            <Form inline className="spaceEmail">
                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel> E-Mail: </ControlLabel>{' '}
                                    <FormControl type="email" placeholder={user.email} disabled/>
                                </FormGroup>{' '}
                            </Form>
                            <br/>
                            <Form inline className="spaceIdRol">
                                <FormGroup controlId="formInlineIdRol">
                                    <ControlLabel> Rol: </ControlLabel>{' '}
                                    <FormControl type="text" placeholder={user.role_id} disabled/>
                                </FormGroup>{' '}
                            </Form>
                        </Panel.Body>
                    </Panel>
                    <br/>
                </div>

            )
        });


        return (
            <div className="UserData ">

                <PanelGroup accordion id="accordion-example">
                    {usersList}
                </PanelGroup>

            </div>
            );
    }
}

export default UserData;
