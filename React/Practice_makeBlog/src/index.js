import React from 'react';
import ReactDOM from 'react-dom';
import {App, Home, Login, Resister, Post, Detail} from './containers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/style.scss';

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<App>
					<Route exact path="/" component={Home}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Resister}/>
					<Route path="/Javascript" component={Post}/>
					<Route path="/React" component={Post}/>
					<Route path="/Node" component={Post}/>
					<Route path="/Etc" component={Post}/>
					<Route path="/Profile/" component={Post}/>
					<Route path="/detail/:id" component={Detail}/>
			</App>
		</Switch>
	</Router>
  , document.getElementById('root'));
