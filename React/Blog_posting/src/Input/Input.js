import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  handleInput(e){
    this.setState({
      text : e.target.value
    })
  }

  render() {
    return (
      <input type="text" value={this.state.text} onChange={e => this.handleInput(e)}/>
    )
  }
}

export default Input;