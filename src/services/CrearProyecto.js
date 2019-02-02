import React, {Component} from 'react';
import axios from 'axios';

class CrearProyecto extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            user_id:''                   
        };
      }

    state = {
                idnumber: '',
                email: ''
            }

    handleChangeName = event => {
        this.setState({ name : event.target.value});
    }

    handleChangeDescription = event => {
        this.setState({ description : event.target.value});
    }

    handleChangeUser_id = event => {
        this.setState({ user_id : event.target.value});
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
                    idnumber: res.idnumber,
                    email: res.email
                })
            })
            

    }

    //-----------------------------------------------------------------------------------------------
    //Endpoint para crear proyectos - publication_id = 1
    //-----------------------------------------------------------------------------------------------

    handleSubmit = event => {
        let jwt = window.localStorage.getItem('jwt');

        event.preventDefault();

        const proyect = {
            name: this.state.name,
            description: this.state.description,
            user_id: this.state.user_id            
        };

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt,
        }


        axios.post(`https://unipastas-back.herokuapp.com/projects`, { name: this.state.name, description: this.state.description, user_id: this.state.user_id }, {headers:headers})

            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    
        
    render(){   
        
        
        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>              
                
                <h2>consumiendo endpoint crear proyectos</h2>
                <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nombre proyecto:
                            <input type="text" name="name" onChange={this.handleChangeName} />
                        </label>
                        <label>
                            Descripción:
                            <input type="text" description="description" onChange={this.handleChangeDescription} />
                        </label>

                        <label>
                            Rol de Usuario:
                            <input type="text" user_id="user_id" onChange={this.handleChangeUser_id} />
                        </label>
                        <br/>
                        
                        
                        <button type="submit">CREAR</button>
                    </form>
                </div>
                

                <p>{JSON.stringify(this.state)}</p>
                </div>

               

            </div>
        )
    }
 }
export default CrearProyecto;