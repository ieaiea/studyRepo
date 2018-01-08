import React from 'react';
import './Body.css';
import Input from '../Input/Input';

class Body extends React.Component{
    render(){
        return (
            <div className="app-body">
              <Input/>
            </div>
        )
    }
}

export default Body;