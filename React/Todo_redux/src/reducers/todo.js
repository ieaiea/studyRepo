import * as types from '../actions/ActionTypes';

const initialState = {
	todoList: [{
		id: Date.now(),
		name: '홍길동',
		content: '배고파',
		status: '진행',
		date: '2017-09-27',
		comment: [{name: '홍길순', content: '나도 ㅠㅠ'}]
	}],
	isEdit: false,
	alertOptions: {
		offset: 14,
		position: 'bottom left',
		theme: 'dark',
		time: 5000,
		transition: 'scale'
	}
};

export default function todo(state = initialState, action) {
	switch (action.type) {
		case types.CREATE_TODO :
			return Object.assign({}, state, {
				todoList: [...state.todoList, {
					id: Date.now(),
					name: action.name,
					content: action.content,
					status: '진행',
					date: Date.now(),
					comment: []
				}]
			});
		case types.DELETE_TODO : { // 블록 스코프로 묶었습니다..
			const newTodos = [...state.todoList];
			const idx = newTodos.findIndex(v => v.id === action.id);
			newTodos.splice(idx, 1);
			return Object.assign({}, state, {
				todoList: newTodos
			});
		}
		case types.UPDATE_MODE :
			return Object.assign({}, state, {
				isEdit: !state.isEdit
			});
		case types.UPDATE_TODO : {
			const newTodo = [...state.todoList];
			const idx = newTodo.findIndex(v => v.id === action.id);
			newTodo[idx].content = action.content;
			return Object.assign({}, state, {
				todoList: newTodo
			});
		}
		case types.UPDATE_STATUS : {
			const newTodo = [...state.todoList];
			const idx = newTodo.findIndex(v => v.id === action.id);
			newTodo[idx].status = action.status;
			return Object.assign({}, state, {
				todoList: newTodo
			});
		}
		case types.CREATE_COMMENT : {
			const newTodo = [...state.todoList];
			const idx = newTodo.findIndex(v => v.id === action.id);
			newTodo[idx].comment.push({
				id: Date.now(),
				name: action.name,
				content: action.content,
				date: Date.now()
			});
			return Object.assign({}, state, {
				todoList: newTodo
			});
		}
		default :
			return state;
	}
}