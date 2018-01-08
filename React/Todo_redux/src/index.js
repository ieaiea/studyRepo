import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/index.scss';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import reducers from './reducers/todo';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route exact path="/:filter" component={App}/>
			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root'));