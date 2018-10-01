import React, { Component } from 'react';
import '../styles/RegisterPage.css';

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Usuario es obligatorio' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Contraseña es obligatoria' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
        <div className="container">

        <header>
          <h2>REGISTRARSE</h2>
        </header>

          <div>

            <label>Nombre (*):</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

            <label>Apellido (*):</label>
            <input type="text" data-test="lastname" value={this.state.lastname} onChange={this.handleUserChange} />

            <label>Correo electrónico:</label>
            <input type="text" data-test="email" value={this.state.email} onChange={this.handleUserChange} />

            <label>Dirección (*):</label>
            <input type="text" data-test="direction" value={this.state.direction} onChange={this.handleUserChange} />

            <label>Contraseña(*): </label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

            <label>Confirmar Contraseña(*): </label>
            <input type="password" data-test="conf_password" value={this.state.conf_password} onChange={this.handlePassChange} />

            <input type="submit" value="CREAR CUENTA" data-test="submit" />
            <input type="submitCancel" value="CANCELAR" data-test="submitCancel" />

          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
