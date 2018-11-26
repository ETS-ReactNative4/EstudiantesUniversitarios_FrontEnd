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

        fetch("http://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            },
        ).then(res => res.json(), console.log(this.state.usuario))



        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/auth',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
                Authorization: 'Bearer ' + jwt,
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
        const datosUsuario = this.state.usuario.map((user)=>{

            return (<p>
                id = {user.id} name = {user.name} idnumber = {user.idnumber} email = {user.email} password = {user.password} beneficiary = {user.beneficiary} role_id = {user.role_id}
            </p>)
        })

        return (
            <div>
                <h1>probando usuario logueado</h1>
                {datosUsuario.name}
            </div>
        );
    }
}
export default UsuarioLogueado;
