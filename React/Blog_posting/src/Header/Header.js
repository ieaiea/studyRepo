import React from 'react';
import './Header.css';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      'title' : '짱구의 기술블로그'
    }
  }
  render(){
    return (
      <div className="app-header">
        <HeaderTitle title={this.state.title}/>
        Header 입니다.
      </div>
    )
  }
}

export default Header;