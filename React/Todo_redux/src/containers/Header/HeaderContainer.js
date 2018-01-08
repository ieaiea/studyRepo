import React from 'react';
import {connect} from 'react-redux';
import {createTodo}from '../../actions';
import Header from '../../components/Header/Header';

class HeaderContainer extends React.Component {
	render() {
		return (
			<Header createTodo={this.props.createTodo} alertOptions={this.props.alertOptions}/>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		alertOptions : state.alertOptions
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createTodo : (name, content) => {
			dispatch(createTodo(name, content));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer); // Connect 인자 1번쨰는 state, 2 번쨰는 dispatch 후..