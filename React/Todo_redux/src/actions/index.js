import * as types from './ActionTypes';

// 기본적으로 액션 생성자는 객체를 던져준다.

export const createTodo = (name, content) => ({
	type : types.CREATE_TODO,
	name,
	content
});

export const deleteTodo = (id) => ({
	type: types.DELETE_TODO,
	id
});

export const updateMode = () => ({
	type: types.UPDATE_MODE
});

export const updateTodo = (id, content) => ({
	type : types.UPDATE_TODO,
	id,
	content
});

export const updateStatus = (id, status) => ({
	type : types.UPDATE_STATUS,
	id,
	status
});

// 댓글

export const createComment = (id, name, content) => ({
	type : types.CREATE_COMMENT,
	id,
	name,
	content
});