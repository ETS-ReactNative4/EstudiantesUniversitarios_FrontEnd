import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <User name="Jairo" idNumber="1082104556" email="jjmuesesq@unal.edu.co" beneficiary="true" password="123456" role_id="1" />
    );
  }
}
export default UserList;
