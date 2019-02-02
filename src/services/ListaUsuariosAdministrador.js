import React, {Component} from 'react';
import axios from 'axios';

class ListaUsuariosAdministrador extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuarios:[]
                       
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
    //Endpoint para listar usuarios - 
    //-----------------------------------------------------------------------------------------------

    componentWillMount(){
        let jwt = window.localStorage.getItem('jwt');
        
        axios({
            method: 'get',
            url:'https://unipastas-back.herokuapp.com/users',
            headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
              Accept: "application/json", // Para JSON
              "Content-Type": "application/json", // Para JSON
              'Authorization': 'Bearer ' + jwt,
             }),
          })
          
          .then(response => {

            let usuarios  = response.data.slice();
  
            this.setState({
              usuarios: usuarios
            })
          })
          .catch(function (error) {
              console.log(error);
          });
    }
        
    render(){

        const usuariosList = this.state.usuarios.map((user)=>{

    
            return (<p>

                      id = {user.id}
                      name = {user.name}
                      id_number = {user.id_number}
                      email = {user.email}
                      password = {user.password}
                      role_id = {user.role_id}
                      
                   </p>)
                   
                 })
        
        
        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>

                <h1>listando usuarios administrador</h1>
                               
                <div>
                    {usuariosList}
                </div>                       
               
            </div>
        )
    }
 }

export default ListaUsuariosAdministrador;