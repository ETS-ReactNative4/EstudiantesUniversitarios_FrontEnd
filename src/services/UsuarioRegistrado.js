import React, { Component } from 'react';
import axios from "axios";

class UsuarioRegistrado extends Component {

    state = {
        name: '',
        email: ''
    }

    handleChangeName = event => {
        this.setState({ name : event.target.value});
    }

    handleChangeEmail = event => {
        this.setState({ email : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post(`https://unipastas-back.herokuapp.com/users`, { user })
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
                            <input type="text" className="name" onChange={this.handleChangeName} />
                        </label>
                        <br/>
                        <label>
                            Correo Electronico:
                            <input type="text" email="email" onChange={this.handleChangeEmail} />
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
