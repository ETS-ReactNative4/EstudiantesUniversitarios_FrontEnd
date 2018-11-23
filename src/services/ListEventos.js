import React, { Component } from 'react';
import axios from 'axios';

class ListEventos extends Component {

    constructor(props){
        super(props);
        this.state = {
            eventos : [] /*almacenar los datos a consumir en api rails*/
        };
    }

    /*enviar la peticion http*/
    componentWillMount(){
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_events',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
                Accept: "application/json", // Para JSON
                "Content-Type": "application/json", // Para JSON
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM2MDY1NjUsInN1YiI6Mn0.RUmEans-ggSxCYYVkMhP9tiQ6X_P3nqyRLp-L9Pkt5M"
            }),
        })

            .then(response => {

                let eventos  = response.data.slice();

                this.setState({
                    eventos: eventos
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const eventsList = this.state.eventos.map((evento)=>{


            return (<p>
                id = {evento.id} name = {evento.name} description = {evento.description} startdate = {evento.startdate} place = {evento.place} latitude = {evento.latitude} longitude = {evento.longitude} user_id = {evento.user_id} type_publication_id ={evento.type_publication_id}
            </p>)
        })

        return (
            <div>
                {eventsList}
            </div>
        );
    }
}
export default ListEventos;
