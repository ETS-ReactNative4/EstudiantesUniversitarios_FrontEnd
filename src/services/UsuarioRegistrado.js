import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class UsuarioRegistrado extends Component {

    state = {
        name: '',
        idnumber:'',
        email:'',
        benefiary:'',
        role_id:'',
        password:'',

    }

    handleChange = event => {
        this.setState({ name: event.target.value });
        this.setState({ idnumber: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ role_id: event.target.value });
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            idnumber: this.state.idnumber,
            email: this.state.email,
            role_id: this.state.role_id,
            password: this.state.password
        }

        /**
        fetch("http://unipastas-back.herokuapp.com/users",
            {
                method: 'POST',
                body: JSON.stringify({
                    name: this.inputNode1.value,
                    email: this.inputNode2.value,
                    idnumber: this.inputNode3.value,
                    password: this.inputNode4.value,
                    role_id: this.inputNode5.value,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            },
        ).then(res => res.json())**/

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',

        }

        axios.post(`https://unipastas-back.herokuapp.com/users`, { user },
            /**{
                headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                    Accept: "application/json", // Para JSON
                    "Content-Type": "application/json", // Para JSON
                })
            }**/
            {headers: headers}
            )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        return (

            <div className="UsuarioRegistrado">

                <h1>Bienvenido a Registro de Usuarios - Estudiantes Universitarios Pastas Aldana</h1>
                <h1>probando usuario registrado</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nombre:
                            {/**<input type="text" name="name" onChange={this.handleChange} ref={node => {this.inputNode1 = node}} />**/}
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <br/>
                        <label>
                            Correo Electronico:
                            {/**<input type="text" email="email" onChange={this.handleChange} ref={node => {this.inputNode2 = node}} />**/}
                            <input type="text" email="email" onChange={this.handleChange} />

                        </label>
                        <br/>
                        <label>
                            Documento:
                            {/**<input type="text" idnumber="idnumber" onChange={this.handleChange} ref={node => {this.inputNode3 = node}} />**/}
                            <input type="text" idnumber="idnumber" onChange={this.handleChange} />
                        </label>
                        <br/>
                        <label>
                            Contraseña:
                            {/**<input type="text" password="password" onChange={this.handleChange} ref={node => {this.inputNode4 = node}} />**/}
                            <input type="text" password="password" onChange={this.handleChange} />
                        </label>
                        <br/>
                        <label>
                            ID_ROL:
                            {/**<input type="text" role_id="role_id" onChange={this.handleChange} ref={node => {this.inputNode5 = node}}/>**/}
                            <input type="text" role_id="role_id" onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>

        );

    }
}

export default UsuarioRegistrado;
