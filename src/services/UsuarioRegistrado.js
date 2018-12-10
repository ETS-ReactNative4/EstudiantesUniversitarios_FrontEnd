import React, { Component } from 'react';
import axios from "axios";

class UsuarioRegistrado extends Component {

    state = {
        name: '',
        email: '',
        idnumber:'',
        role_id: '',
        password: ''
    }

    handleChangeName = event => {
        this.setState({ name : event.target.value});
    }

    handleChangeEmail = event => {
        this.setState({ email : event.target.value});
    }

    handleChangeIdnumber = event => {
        this.setState({ idnumber : event.target.value});
    }

    handleChangeRoleId = event => {
        this.setState({ role_id : event.target.value});
    }

    handleChangePassword = event => {
        this.setState({ password : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            idnumber: this.state.idnumber,
            role_id: this.state.role_id,
            password: this.state.password
        };

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',
        }

        axios.post(`http://unipastas-back.herokuapp.com/users`, { user }, {headers:headers})
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
                        <label>
                            Identificacón:
                            <input type="number" idnumber="idnumber" onChange={this.handleChangeIdnumber} />
                        </label>
                        <br/>
                        <label>
                            Role_Id:
                            <input type="number" role_id ="role_id" onChange={this.handleChangeRoleId} />
                        </label>
                        <br/>
                        <label>
                            Contraseña:
                            <input type="text" password="password" onChange={this.handleChangePassword} />
                        </label>
                        <br/>


                        <button type="submit">Registrarse</button>
                    </form>
                </div>

                <p>{JSON.stringify(this.state)}</p>
            </div>

        );

    }
}

export default UsuarioRegistrado;

//<script>alert('')</script>