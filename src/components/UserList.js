import React, { Component } from 'react';
import User from '/User';

class UserList extends Component {

constructor(props){
  super(props);
}

  render() {
    return (
      <div>
        <User name="Jairo" idNumber=1082104556 email="jjmuesesq@unal.edu.co" beneficiary=true password=123456 />
      </div>
    );
  }
}
export default UserList;
