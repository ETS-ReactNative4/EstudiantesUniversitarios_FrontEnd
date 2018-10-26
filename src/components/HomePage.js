import React, { Component } from 'react';
/*import '../styles/HomePage.css';*/
import BarHome from "./BarHome";
import CarouselImages from "./CarouselImages";

class HomePage extends Component {

    render() {

        return (

          <div className="HomePage">

              <BarHome/>

              <CarouselImages/>

          </div>

        );
  
    }
  
}

export default HomePage;
