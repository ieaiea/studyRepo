import React from 'react';
import Header from './Header/Header';
import ContentList from './Content/ContentList';
import Footer from './Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{id:Date.now(), name :'홍길동', content:'배고파', status:'진행', date:'2017-09-27', comment:[{name:'홍길순', content:'나도 ㅠㅠ'}]}]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addComment = this.addComment.bind(this);
    this.todoStatus = this.todoStatus.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
  }
  addTodo(name, content){
    const newTodo = {
      id : Date.now(),
      name,
      content,
      status : '진행',
      date : '2017-09-22',
      comment : []
    };
    this.setState({
      todoList : [...this.state.todoList, newTodo]
    })
  }
  addComment(id, name, content){
    const newTodo = [...this.state.todoList];
    const idx = this.findIndex(id, newTodo);
    const comment = {
      id : Date.now(),
      name,
      content,
      date : Date.now()
    };
    newTodo[idx].comment.push(comment);
    this.setState({
      todoList : newTodo
    })
  }
  updateTodo(id, content){
    const newTodo = [...this.state.todoList];
    const idx = this.findIndex(id, newTodo);
    newTodo[idx].content = content;
	  this.setState({
		  todoList : newTodo
	  })
  }
  todoStatus(id, status){
    const newTodo = [...this.state.todoList];
    const idx = this.findIndex(id, newTodo);
    newTodo[idx].status = status;
    this.setState({
      todoList : newTodo
    })
  }
  deleteTodo(id){
    const newTodo = [...this.state.todoList];
    const idx = this.findIndex(id, newTodo);
    newTodo.splice(idx, 1);
    this.setState({todoList : newTodo});
  }
  findIndex(id, arr) {
	  return arr.findIndex(v => v.id === id);
  }
  filterTodos(select){
    console.log(select.filter);
    switch (select.filter){
      case 'Active' :
        return this.state.todoList.filter( v => v.status == '진행');
	      break;
      case 'Compelted' :
	      return this.state.todoList.filter( v => v.status == '완료');
	      break;
      default :
        return this.state.todoList
    }
  }

  render() {
	  const {match: {params}} = this.props;
	  const filterTodo = this.filterTodos(params);
    return (
      <div className="wrap_root">
        <div className="wrap_content">
          <Header addTodo={this.addTodo}/>
          <ContentList
            todoList={filterTodo}
            deleteTodo={this.deleteTodo}
            addComment={this.addComment}
            todoStatus={this.todoStatus}
            updateTodo={this.updateTodo}
          />
          <Footer todo={filterTodo}/>
        </div>
      </div>
    )
  }
}

export default App;