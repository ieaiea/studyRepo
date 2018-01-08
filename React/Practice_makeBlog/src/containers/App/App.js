import React from 'react';
import {Header, Nav, Footer, Content} from '../../components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Content component={this.props.children}/>
        <Footer/>
      </div>
    )
  }
}


export default App;