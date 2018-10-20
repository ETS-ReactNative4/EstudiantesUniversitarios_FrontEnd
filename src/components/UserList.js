import React, { Component } from 'react';
import User from './User';
import axios from 'axios';

class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
    componentWillMount(){
      // GET request for remote image
        axios({
          method: 'get',
          url:'https://unipastas-back.herokuapp.com/users',
          headers: ({ // Headers se usa para modificar los encabezados, como se haría en Postman
            Accept: "application/json", // Para JSON
            "Content-Type": "application/json", // Para JSON
           }),
        })

        .then(response => {

          let users  = response.data.slice(0, 5);

          this.setState({
            users: users
          })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


  render() {
    const usersList = this.state.users.map((user)=>{
          {/*<User role_id={user.role_id} name={user.name} idNumber={user.idNumber} email={user.email} beneficiary={user.beneficiary} />*/}
           return (<p> {user.role_id} {user.name} {user.idNumber} {user.email} {user.beneficiary}</p>)
    })

    return (
        <div>
            {usersList}
        </div>
    );
  }
}
export default UserList;
