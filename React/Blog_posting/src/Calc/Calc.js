import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(){
    console.log(this.state.result);
  }

  render() {
    return (
      <button onClick={this.handleButton}>결과값</button>
    )
  }
}

export default Calc;