import React, { Component } from 'react';
import '../styles/Tabs.css';

class Tabs extends Component {
  render() {
    return (
      <div className="Tabs">
          {/*agregando pestañas */}
          <div class="container">
          <h3 class="text-center">Integrantes principales de la Organización Estudiantil</h3>
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" hmodules ref="#home">Autoridad Tradicional</a></li>
            <li><a data-toggle="tab" href="#menu1">Representante 1</a></li>
            <li><a data-toggle="tab" href="#menu2">Representante 2</a></li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <h2>Hernando Cuasmayan, Gobernador Resguardo de Pastas Aldana</h2>
              <p>Man, we ve been on the road for some time now. Looking forward to lorem ipsum.</p>
            </div>
            <div id="menu1" class="tab-pane fade">
              <h2>Andrea Erira, Estudiante de Contaduria Publica - Universidad de Nariño</h2>
              <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more pleased?</p>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h2>Samanta Acosta, EStudiante de Ingenieria Agroindustrial -Universidad de Nariño</h2>
              <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
export default Tabs;
