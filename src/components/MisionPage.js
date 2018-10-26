import React, { Component } from 'react';
import '../styles/MisionPage.css';
import BarHome from "./BarHome";
import {Grid, Jumbotron} from "react-bootstrap";


class MisionPage extends Component {

    render() {

        return (

          <div className="MisionPage container">

              <BarHome/>

              <Grid>
                  <Jumbotron >
                      <h1>Misión</h1>
                      <p>
                          This is a simple hero unit, a simple jumbotron-style component for calling
                          extra attention to featured content or information.
                      </p>

                  </Jumbotron>
              </Grid>
          </div>

        );
  
    }
  
}

export default MisionPage;
