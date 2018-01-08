import React from 'react';
import {Authentication} from '../../components';

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Authentication mode={false}/>
      </div>
    )
  }
}

export default LoginContainer;