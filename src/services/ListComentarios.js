import React, {Component} from 'react';
import axios from 'axios';

class ListComentarios extends Component{

    constructor(props){
        super(props);
        this.state = {
            comentarios:[],
            id: '',
            body: '',
            username:'',
            publication_id:''            
        };
      }

    state = {
                name: '',
                idnumber: '',
                email: ''
            }

    

    //-----------------------------------------------------------------------------------------------
    //Endpoint para autorizar usuario
    //-----------------------------------------------------------------------------------------------
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


    //-----------------------------------------------------------------------------------------------
    //Endpoint para listar comentarios - publication_id = 1
    //-----------------------------------------------------------------------------------------------

    componentWillMount(){
        let jwt = window.localStorage.getItem('jwt');
        
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/publications/1/comments',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          
          .then(response => {

            let comentarios  = response.data.slice();
  
            this.setState({
              comentarios: comentarios
            })
          })
          .catch(function (error) {
              console.log(error);
          });
    }
        
    render(){

        const comentariosList = this.state.comentarios.map((comentario)=>{

    
            return (<p>

                      id = {comentario.id}
                      body = {comentario.body}
                      username = {comentario.username}
                      publication_id = {comentario.publication_id}
                      
                   </p>)
                   
                 })
        
        
        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                <h2>Usuario: {this.state.name}</h2>
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>

                <h1>listando comentarios</h1>
                
                <h2>consumiendo endpoint lista comentarios</h2>
                <div>
                    {comentariosList}
                </div>                       
               
            </div>
        )
    }
 }
export default ListComentarios;