import React from 'react';
import './Box.css';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'bool': false
    }
  }
  changeColor(e){
    this.setState({
      "bool" : !this.state.bool
    })
  }
  render() {
    return (
      <div>
        <div className={this.state.bool ? 'red' : 'blue'} id="box">
          Box 입니다.
        </div>
        <button onClick={e => this.changeColor(e)}>색상바꾸기</button>
      </div>
    )
  }
}

export default Box;