import React, { Component } from 'react';
import '../styles/RegisterPage.css';

class RegisterPage extends Component {

    constructor(){
        super();
        this.state = {
            userEMail: "",
            userName: "",
            password: "",
            confPass: ""
        }

    }

  render() {
    return (
      <div className="RegisterPage">

          <div className="wrapper fadeInDown container-fluid">
              <div id="formContent">

                  <div className="fadeIn first">
                      <img src="https://zwxnnw.by.files.1drv.com/y4mZopqaSUF-PnliWTSaAw8bBGKjvmp6G-ZGl5LefXxdG6QPZw3xchdnvreMKZi5aHSifxLzaT9yoBI6i_4tvypqY4fJIQ3vj3a4JBTL3Pl1X3i4ly8QUWsAOkeOZnX1kaJSpp8siroME-NWKygH-wW0CO-vf-fzDQGVSBFJJNlDdbn5oeP1-EqcK-ZH650Y9OE?width=256&height=256&cropmode=none" id="icon" alt="User Icon" />
                  </div>

                  <form>
                      <div className="row">
                        <label className="LabelMail">E-Mail: *</label>
                        <input type="text" id="login" className="fadeIn first" name="login" placeholder="ejemplo@ejemplo.com" onChange={this.upDateUserEMail.bind(this)}/>
                      </div>
                      <br/>
                      <div className="row">
                          <label className="LabelUser">Nombre de usuario: *</label>
                          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Mínimo 5 caracteres" onChange={this.upDateUserName.bind(this)}/>
                      </div>
                      <br/>
                      <div className="row">
                          <label className="LabelPss">Contraseña: *</label>
                          <input type="password" id="password" className="fadeIn third" name="login" placeholder="Mínimo 6 caracteres" onChange={this.upDatePassword.bind(this)}/>
                      </div>
                      <br/>
                      <div className="row">
                          <label>Confirmar contraseña: *</label>
                          <input type="password" id="password" className="fadeIn fourth" name="login" placeholder="Mínimo 6 caracteres" onChange={this.upDateConfPass.bind(this)}/>
                      </div>
                      <br/>
                      <div id="formFooter">
                          <input type="button" className="fadeIn fourth" value="Crear Cuenta" onClick={this.mensajeError.bind(this)}/>
                          <input type="button" className="fadeIn fourth" value="Regresar"/>
                      </div>

                  </form>

              </div>
          </div>

      </div>
    );
  }


    upDateUserEMail(event){
        this.setState({
            userEMail: event.target.value
        });
    }

    upDateUserName(event){
        this.setState({
            userName: event.target.value
        });
    }

    upDatePassword(event){
        this.setState({
            password: event.target.value
        });
    }

    upDateConfPass(event){
        this.setState({
            confPass: event.target.value
        });
    }

    mensajeError(){
        var tmp = this.errorDatos();
        alert(tmp);
    }

    errorDatos(){

        var mensaje = "";

        var validarUserEMail = this.state.userEMail;
        var validarUserName =  this.state.userName;
        var validarPassword =  this.state.password;
        var validarConfPass =  this.state.confPass;




        var expUserEMail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})/);
        var expUserName = new RegExp(/^(([a-zA-Z]|[0-9]){5,})/);
        var expPassword = new RegExp(/^(([a-zA-Z]|[0-9]|[\$,#,_,-,\.,@,&]){6,})/);
        console.log(expUserEMail.test(validarUserEMail));
        console.log(expUserName.test(validarUserName));
        console.log(expPassword.test(validarPassword));
        console.log(expPassword.test(validarConfPass));
        if((validarUserEMail.length < 1) | (validarUserName.length < 1) | (validarPassword.length < 1) | (validarConfPass.length < 1)) mensaje += "*). LOS CAMPOS NO PUEDEN SER VACIOS \n";
        if(!expUserEMail.test(validarUserEMail)) mensaje += "*). EL CORREO NO CUMPLE CON EL FORMATO \n";
        if(!expUserName.test(validarUserName)) mensaje += "*). EL NOMBRE DE USUARIO NO CUMPLE CON LOS REQUISITOS \n";
        if(!expPassword.test(validarPassword)) mensaje += "*). LA CONTRASEÑA NO CUMPLE LOS REQUISITOS MINIMOS \n";
        if(!expPassword.test(validarConfPass)) mensaje += "*). LA CONTRASEÑA NO CUMPLE LOS REQUISITOS MINIMOS \n";
        if(mensaje.length == 0) mensaje = "200";
        return mensaje;
    }



}

export default RegisterPage;
