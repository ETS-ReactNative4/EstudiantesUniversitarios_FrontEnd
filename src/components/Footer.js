import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      {/*Agregando pie de pagina*/}
        <footer class="text-center">
          <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span class="glyphicon glyphicon-chevron-up"></span>
          </a><br /><br />
          <p>INGENIERIA DE SOFTWARE 2 GRUPO HEAVE GEAR</p>
          <p><em>David Herrera</em></p>
          <p><em>Jhon Jairo Mueses</em></p>
          <p><em>Gonzalo Eduardo Baez</em></p>
          <p><em>Camilo Mosquera</em></p>

        </footer>
      </div>
    );
  }
}
export default Footer;
