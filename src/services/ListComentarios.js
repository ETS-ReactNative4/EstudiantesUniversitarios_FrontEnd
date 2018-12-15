import React, {Component} from 'react';
import axios from 'axios';

class ListComentarios extends Component{

    constructor(props){
        super(props);
        this.state = {
            comentarios:[],
            id: '',
            body: '',
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
            publication_id: this.state.publication_id            
        };

        var headers = {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt,
        }


        axios.post(`https://unipastas-back.herokuapp.com/publications/1/comments`, { id: this.state.id, body: this.state.body, publication_id: this.state.publication_id }, {headers:headers})

            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    componentWillMount(){
        let jwt = window.localStorage.getItem('jwt');
        //-----------------------------------------------------------------------------------------------
        //Endpoint para listar comentarios - publication_id = 1
        //-----------------------------------------------------------------------------------------------
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

                <h2>consumiendo endpoint crear comentarios</h2>
                <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
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
export default ListComentarios;