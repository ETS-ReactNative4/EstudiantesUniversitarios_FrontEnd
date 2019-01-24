import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';


class Redireccionar extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            role_id : ""
        }
    }

    

    render() {

        return (

          <div className="Redireccionar" onSubmit={this.handleSubmit}>

              REDIRECIONANDO A LA PAGINA DE INICIO

              <p> ROL --> {this.state.role_id} </p>

          </div>

        );

    }
}

export default Redireccionar;
