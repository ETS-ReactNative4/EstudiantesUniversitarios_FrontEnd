import React, { Component } from 'react';
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}
export default Home;
