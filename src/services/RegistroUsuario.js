import React, { Component } from 'react';
import axios from "axios";

class RegistroUsuario extends Component {

    constructor(args){
        super(args)
        this.state = {
            name: '',
            idnumber:'',
            email:'',
            role_id:'',
            password:'',
            message:''
        }

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(){
        this.setState({
            message: "guardado correctamente"
        })
    }


    render() {

        return (

            <div className="RegistroUsuario">

                <form onSubmit={this.handleSubmit}>

                <label htmlFor="name">Nombre</label>
                <input
                    value={this.state.name}
                    onChange={this.onChange.bind(this)}
                    name="name" id="name" type="text"/>
                <br/>

                <label htmlFor="idnumber">Identificación</label>
                <input
                    value={this.state.idnumber}
                    onChange={this.onChange.bind(this)}
                    name="idnumber" id="idnumber" type="text"/>
                <br/>

                <label htmlFor="email">Correo</label>
                <input
                    value={this.state.email}
                    onChange={this.onChange.bind(this)}
                    name="email" id="email" type="text"/>
                <br/>

                <label htmlFor="role_id">Rol de usuario</label>
                <input
                    value={this.state.role_id}
                    onChange={this.onChange.bind(this)}
                    name="role_id" id="role_id" type="text"/>
                <br/>

                <label htmlFor="password">contraseña</label>
                <input
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                    name="password" id="password" type="text"/>
                <br/>
                </form>

                <p>{JSON.stringify(this.state)}</p>

                <div>
                    <button type="submit" onClick={this.save.bind(this)}>Registrarse</button>
                    <span>{this.state.message}</span>
                </div>

            </div>


        );

    }
}

export default RegistroUsuario;
