import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class UsuarioRegistrado2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            usuario : [] /*almacenar los datos a consumir en api rails*/

        };
    }

    /*enviar la peticion http*/
    componentWillMount(){
        axios({
            method: 'post',
            url:'https://unipastas-back.herokuapp.com/users',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
            }),
        })

            .then(response => {

                let usuarios  = response.data.slice();

                this.setState({
                    usuarios: usuarios
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (

            <div className="UsuarioRegistrado2">

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

export default UsuarioRegistrado2;
