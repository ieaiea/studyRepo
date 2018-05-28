import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import {Home, Signup, Join} from './components';
import {Home, Signup, Join} from './helper/asyncRouter';
import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="wrap_header">
            <Navigator/>
         </div>
         <div className="wrap_content">
          <Route exact path="/" component={Home}/>
          <Switch>
              <Route path="/signup" component={Signup}/>
              <Route path="/join" component={Join}/>
          </Switch>
         </div>
      </div>
    );
  }
}

export default App;
