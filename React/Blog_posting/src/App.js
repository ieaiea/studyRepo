import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Box from './Box/Box';
import Calc from './Calc/Calc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
        <Box/>
        <Calc/>
      </div>
    );
  }
}

export default App;
