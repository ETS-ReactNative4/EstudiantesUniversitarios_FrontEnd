import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : [] /*almacenar los datos a consumir en api rails*/
    };
  }

  /*enviar la peticion http*/
  componentWillMount(){

  }


  render() {
    return (
      <User name="Jairo" idNumber="123456789" email="jjmuesesq@unal.edu.co" beneficiary="true" password="123456" role_id="1" />
    );
  }
}
export default UserList;
