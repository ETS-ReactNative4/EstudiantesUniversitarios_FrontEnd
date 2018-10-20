import React, { Component } from 'react';

class User extends Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <div>
        <label>User neme: {this.props.name}</label><br />
        <label>User idNUmber: {this.props.idNumber}</label><br />
        <label>User email: {this.props.email}</label><br />
        <label>User beneficiary: {this.props.beneficiary}</label><br />
        <label>User password: {this.props.password}</label><br />
        <label>User role_id: {this.props.role_id}</label><br />
      </div>
    );
  }
}
export default User;
