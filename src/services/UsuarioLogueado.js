import React, { Component } from 'react';
import axios from 'axios';

class UsuarioLogueado extends Component {

    constructor(props){
        super(props);
        this.state = {
            usuario : [] /*almacenar los datos a consumir en api rails*/
        };
    }

    /*enviar la peticion http*/
    componentWillMount(){

        let jwt = window.localStorage.getItem('jwt');
        {/**
        fetch("http://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            },
        ).then(res => res.json(), console.log(this.state.message))
            .then(res => (console.log(res.msg), this.setState({message: res.msg})
            ))**/}


        axios({
            method: 'GET',
            url:'https://unipastas-back.herokuapp.com/auth',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
                Authorization: 'Bearer ' + jwt
               //Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM4ODc1ODAsInN1YiI6M30.iNcTy8eR7L15Bj2PmhkxZ4ne5FB9VgJlmvMXlTk6tG4"
            }),
        })

            .then(response => {

                let usuario  = response.data.slice();

                this.setState({
                    usuario: usuario
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const Usuario = this.state.usuario.map((user)=>{


            return(
                <p>
                id = {user.id} name = {user.name} idnumber = {user.idnumber} email = {user.email} password = {user.password} role_id = {user.role_id}
                </p>)
        })

        return (
            <div>
                <h1>Datos de Usuario</h1>
                {Usuario}
            </div>
        );
    }
}
export default UsuarioLogueado;
