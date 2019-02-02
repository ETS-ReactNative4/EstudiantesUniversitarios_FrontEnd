import React, {Component} from 'react';
import axios from 'axios';

class CrearComentario extends Component{

    constructor(props){
        super(props);
        this.state = {
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

    handleChangeId = event => {
        this.setState({ id : event.target.value});
    }

    handleChangeBody = event => {
        this.setState({ body : event.target.value});
    }

    handleChangePublication_id = event => {
        this.setState({ publication_id : event.target.value});
    }

    handleChangeUsername = event => {
        this.setState({ username : event.target.value});
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
    //Endpoint para crear comentarios - publication_id = 1
    //-----------------------------------------------------------------------------------------------

    handleSubmit = event => {
        let jwt = window.localStorage.getItem('jwt');

        event.preventDefault();

        const coment = {
            id: this.state.id,
            body: this.state.body,
            username:this.state.username,
            publication_id: this.state.publication_id            
        };

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt,
        }


        axios.post(`https://unipastas-back.herokuapp.com/publications/1/comments`, { id: this.state.id, body: this.state.body, username: this.state.username, publication_id: this.state.publication_id }, {headers:headers})

            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    
        
    render(){   
        
        
        return(
            <div>
                <h1>Bienvenido al sistema de información de la Organizacion de Estudiantes Universitarios</h1>
                <h2>Usuario: {this.state.name}</h2>
                <h2>Identificación: {this.state.idnumber}</h2>
                <h2>Correo: {this.state.email}</h2>              
                
                <h2>consumiendo endpoint crear comentarios</h2>
                <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nombre publicación:
                            <input type="text" id="id" onChange={this.handleChangeId} />
                        </label>
                        <label>
                            Usuario:
                            <input type="text" username="username" onChange={this.handleChangeUsername} />
                        </label>

                        <label>
                            Contenido:
                            <input type="text" body="body" onChange={this.handleChangeBody} />
                        </label>
                        <br/>
                        
                        
                        <button type="submit">Comentar</button>
                    </form>
                </div>
                

                <p>{JSON.stringify(this.state)}</p>
                </div>

               

            </div>
        )
    }
 }
export default CrearComentario;