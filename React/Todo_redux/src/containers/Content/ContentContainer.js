import React from 'react';
import Content from '../../components/Content/Content';
import {connect} from 'react-redux';
import {deleteTodo, updateMode, updateTodo, updateStatus}from '../../actions';

class ContentContainer extends React.Component {
	render() {
		const {isEdit, deleteTodo, updateMode, updateTodo, updateStatus} = this.props;
		const todos = this.props.todoList.map( todo => (
			<Content todo={todo} key={todo.id} isEdit={isEdit} id={todo.id}
			         deleteTodo={() => {deleteTodo(todo.id)}}
			         updateMode={updateMode}
			         updateTodo={updateTodo}
			         updateStatus={updateStatus}
			/>
		));
		return (
			<div className="box_content">
				{todos}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList,
		isEdit : state.isEdit,
		alertOptions : state.alertOptions
	}
};
const mapDispatchToProps = dispath => {
	return {
		deleteTodo : id => {
			dispath(deleteTodo(id))
		},
		updateMode : () => {
			dispath(updateMode())
		},
		updateTodo : (id, content) => {
			dispath(updateTodo(id, content))
		},
		updateStatus : (id, status) => {
			dispath(updateStatus(id, status))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);