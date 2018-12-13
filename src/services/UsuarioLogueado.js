import React, {Component} from 'react';
import axios from 'axios';

class UsuarioLogueado extends Component{

    constructor(props){
        super(props);
        this.state = {
          actividades : [] /*almacenar los datos a consumir en api rails*/
        };
      }

    state = {
                name: '',
                idnumber: '',
                email: ''
            }

    

    componentDidMount(){
        let jwt = window.localStorage.getItem('jwt');

        fetch("https://unipastas-back.herokuapp.com/auth",
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwt,
                },
            },

           

        ).then(res => res.json())
            //.then(res => (console.log(res.name), this.setState({name: res.name})
            //))
            .then(res => {
                this.setState({
                    name: res.name,
                    idnumber: res.idnumber,
                    email: res.email
                })
            })
            

    }

    componentWillMount(){
        let jwt = window.localStorage.getItem('jwt');

        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })

          .then(response => {

            let actividades  = response.data.slice();
  
            this.setState({
              actividades: actividades
            })
          })
          .catch(function (error) {
              console.log(error);
          });

    }


    render(){

        const actividadesList = this.state.actividades.map((actividad)=>{

    
            return (<p>
                      id = {actividad.id} name = {actividad.name} description = {actividad.description} place = {actividad.place}
                   </p>)
                 })

        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                <h2>Usuario: {this.state.name}</h2>
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>

                <h1>listando actividades</h1>
                <div>
                    {actividadesList}
                </div>

            </div>
        )
    }
 }
export default UsuarioLogueado;