import React, {Component} from 'react';
import axios from 'axios';

class UsuarioLogueado extends Component{

    constructor(props){
        super(props);
        this.state = {
          actividades : [], /*almacenar los datos a consumir en api rails*/
          eventos : []
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

        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_events',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })

          .then(response1 => {

            let eventos  = response1.data.slice();
  
            this.setState({
              eventos: eventos
            })
          })
          .catch(function (error) {
              console.log(error);
          });
        
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications_events',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })

          .then(response1 => {

            let eventos  = response1.data.slice();
  
            this.setState({
              eventos: eventos
            })
          })
          .catch(function (error) {
              console.log(error);
          });

    }


    render(){

        const actividadesList = this.state.actividades.map((actividad)=>{

    
            return (<p>
                      id = {actividad.id}
                      name = {actividad.name}
                      description = {actividad.description}
                      startdate = {actividad.stardate} 
                      place = {actividad.place} 
                      latitude = {actividad.latitude} 
                      longitude = {actividad.longitude} 
                      user_id = {actividad.user_id}
                      type_publication_id = {actividad.type_publication_id} 
                   </p>)
                   
                 })
        
        const eventosList = this.state.eventos.map((evento)=>{

    
                    return (<p>
                              id = {evento.id}
                              name = {evento.name}
                              description = {evento.description}
                              startdate = {evento.stardate} 
                              place = {evento.place} 
                              latitude = {evento.latitude} 
                              longitude = {evento.longitude} 
                              user_id = {evento.user_id}
                              type_publication_id = {evento.type_publication_id} 
                           </p>)
                           
                         })

        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                <h2>Usuario: {this.state.name}</h2>
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>

                <h1>listando actividades</h1>
                <h2>listado de publicaciones sin filtrar</h2>

                <div>
                    {actividadesList}
                </div>

                <h2>listado de eventos</h2>
                    {eventosList}
                <div>
                    
                </div>

                <h2>listado de accesorias</h2>

                <div>
                    
                </div>
                <h2>listado de publicaciones</h2>

                <div>
                   
                </div>

            </div>
        )
    }
 }
export default UsuarioLogueado;