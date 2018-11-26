import React, { Component } from 'react';
import axios from 'axios';

class List_estado_documento extends Component {

    constructor(props){
        super(props);
        this.state = {
            listEstadoDocumento : [], /*almacenar los datos a consumir en api rails*/
            message: undefined
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
        ).then(res => res.json(), console.log(this.state.message))
            .then(res => (console.log(res.msg), this.setState({message: res.msg})
            ))


        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/document_states',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
                Authorization: 'Bearer ' + jwt
                //Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM2MDY1NjUsInN1YiI6Mn0.RUmEans-ggSxCYYVkMhP9tiQ6X_P3nqyRLp-L9Pkt5M"
            }),
        })

            .then(response => {

                let listEstadoDocumento  = response.data.slice();

                this.setState({
                    listEstadoDocumento: listEstadoDocumento
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const ListEstados = this.state.listEstadoDocumento.map((estado)=>{


            return (<p>
                id = {estado.id} name = {estado.name}
            </p>)
        })

        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>Lista de estados de docuemntos</h1>
                {ListEstados}
            </div>
        );
    }
}
export default List_estado_documento;
