import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">

        {/*creando contenedor contacto*/}
        <div id="contact" class="container">
          <h3 class="text-center">Contactos</h3>
          <p class="text-center"><em>Accesorias!</em></p>

          <div class="row">
            <div class="col-md-4">
              <p>Deja una nota.</p>
              <p><span class="glyphicon glyphicon-map-marker"></span>ALDANA, NARIÑO</p>
              <p><span class="glyphicon glyphicon-phone"></span>Phone: +00 123456789</p>
              <p><span class="glyphicon glyphicon-envelope"></span>Email: unipastasaldana@gmail.com</p>
            </div>

            <div class="col-md-8">
              <div class="row">
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                </div>
              </div>
              <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
              <br />
              <div class="row">
                <div class="col-md-12 form-group">
                  <button class="btn pull-right" type="submit">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Contact;
