import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.scss';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/:filter" component={App}/>
		</Switch>
	</Router>
	, document.getElementById('root'));