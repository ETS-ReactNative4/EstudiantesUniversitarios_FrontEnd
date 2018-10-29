import React, { Component } from 'react';
import axios from 'axios';

class RolesList extends Component {

  constructor(props){
    super(props);
    this.state = {
      roles : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
    componentWillMount(){
      axios({
          method: 'get',
          url:'https://unipastas-back.herokuapp.com/roles',
          headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
            Accept: "application/json", // Para JSON
            "Content-Type": "application/json", // Para JSON
           }),
        })

        .then(response => {

          let roles  = response.data.slice();

          this.setState({
            roles: roles
          })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  render() {
    const rolesList = this.state.roles.map((rol)=>{

    return (<p>
                id = {rol.id} name = {rol.name}
             </p>)
           })

    return (
        <div>
            {rolesList}
        </div>
    );
  }
}
export default RolesList;
