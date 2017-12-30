import React from 'react';
import HeaderContainer from './HeaderContainer';
import TodoList from './TodoList';
import {Footer} from '../components';

export default class App extends React.Component{
    render(){
        return (
            <div>
              <HeaderContainer/>
              <TodoList/>
              <Footer/>
            </div>
        )
    }
}