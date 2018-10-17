import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class User extends Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <div>
        <label>neme: {this.props.name}</label>
        <label>idNUmber: {this.props.idNumber}</label>
        <label>email: {this.props.email}</label>
        <label>beneficiary: {this.props.beneficiary}</label>
        <label>password: {this.props.password}</label>
        <label>role_id: {this.props.role_id}</label>

      </div>
    );
  }
}
export default User;
