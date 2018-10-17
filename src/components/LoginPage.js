import React, { Component } from 'react';
import '../styles/LoginPage.css';

class LoginPage extends Component {

    constructor(){
        super();
        this.state = {
            user: "",
            password: ""
        }

    }

    render() {
    return (
      <div className="LoginPage">

          <div className="wrapper fadeInDown">
              <div id="formContent">

                  <div className="fadeIn first">
                      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"/>
                  </div>


                  <form>
                      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario *" onChange={this.upDateUser.bind(this)}/>
                      <input type="password" id="password" className="fadeIn third" name="login" placeholder="Contraseña *" onChange={this.upDatePassword.bind(this)}/>
                      <input type="submit"    className="fadeIn fourth BotonEntrar" value="Entrar" onClick={this.mensajeError.bind(this)}/>
                  </form>


                  <div id="formFooter">
                      <a className="underlineHover" href="#">¿ Olvidó su contraseña ?</a>
                  </div>

              </div>
          </div>
      </div>
    );
  }

  upDateUser(event){
      this.setState({
         user: event.target.value
      });
  }

  upDatePassword(event){
      this.setState({
          password: event.target.value
      });
  }

  mensajeError(){
        var tmp = this.errorDatos();
        alert(tmp);
  }

  errorDatos(){
        var validUser = this.state.user;
        var validPassword =  this.state.password;
        if((validUser.length < 1) && (validPassword.length< 1)) return "LOS CAMPOS NO PUEDEN SER VACIOS";
        if((validUser.length < 1) && (validPassword.length > 0)) return "EL USUARIO NO PUEDE SER VACIO";
        if((validUser.length > 0) && (validPassword.length < 1)) return "LA CONTRASEÑA NO PUEDE SER VACIO";
        return "200";
   }

}

export default LoginPage;
