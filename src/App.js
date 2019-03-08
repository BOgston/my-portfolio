import React, { Component } from 'react';
import './Assets/css/default.min.css';

//components
import Header from './Components/header_component/header';
import Footer from './Components/footer_component/footer';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Footer/>




      </div>
    );
  }
}

export default App;
