import React, { Component } from 'react';
import '../styles/LoginPage.css';

class LoginPage extends Component {
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
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <div className="container">

        <header>
          <h2>INICIO DE SESION</h2>
        </header>

          <div>
            <label>USUARIO:</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

            <label>CONTRASEÑA: </label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

            <input type="submit" value="Entrar" data-test="submit" />

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

export default LoginPage;
