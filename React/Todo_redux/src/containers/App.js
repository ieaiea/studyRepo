import React from 'react';
import Header from './Header/HeaderContainer';
import ContentContainer from './Content/ContentContainer';
import Footer from '../components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="wrap_root">
        <div className="wrap_content">
          <Header/>
          <ContentContainer/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;