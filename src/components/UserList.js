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
          url:'http://unipastas-back.herokuapp.com/users',
          config: {
            headers: {
              accept: 'application/json',
            },
            data: {},
          },
        })
        .then(response => {
          console.log(response);
        });
    }


  render() {
    const userList = this.state.users.map((user)=>{
          <User name={user.name} idNumber={user.idNumber} email={user.email} beneficiary={user.beneficiary} password={user.password} role_id={user.role_id}/>
    })

    return (
        <div>
            {userList}
        </div>
    );
  }
}
export default UserList;
