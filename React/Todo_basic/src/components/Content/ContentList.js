import React from 'react';
import Content from './Content';


const ContentList = ({todoList, deleteTodo, addComment, todoStatus, updateTodo}) => (
  <div className="box_content">
    {todoList.map((todo, idx) => (
      <Content
        todo={todo} key={idx}
        deleteTodo={() => deleteTodo(todo.id)}
        id = {todo.id}
        content = {todo.content}
        addComment = {addComment}
        todoStatus = {todoStatus}
        updateTodo = {updateTodo}
      />
    ))}
  </div>
);

export default ContentList;