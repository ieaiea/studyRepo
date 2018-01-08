import React from 'react';
import ClassNames from 'classnames';
import TimeAgo from 'react-timeago'
import Comment from './CommentContainer';

/* <div className="prev_comment"><button>이전 3개 댓글 보기<span className="icon icon_more"/></button></div> 댓글 보류 */
class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : '',
      content : '',
      isEdit : false,
      editData : ''
    }
  };
  handleDelete(){
    this.props.deleteTodo();
  }
  handleStatus(e){
    this.props.todoStatus(this.props.id, e.target.name);
  }
  handleDoubleClick(e){
    this.setState({
      isEdit: true,
      editData : this.props.content
    })
  }
  handleUpdate(e){
    e.preventDefault();
	  this.props.updateTodo(this.props.id, this.state.editData);
	  this.setState({
		  isEdit: false
	  })
  }
  render() {
    const {todo, deleteTodo} = this.props;
    return (
      <div className="content_box">
        <div className="content_header">
          <h2 className="tit_name">{todo.name}<TimeAgo className="txt_date" date={todo.date}/></h2>
          <div className="wrap_btn">
            <button className={ClassNames({'btn': true, 'btn_start': todo.status === '진행'})}
                    onClick={(e) => this.handleStatus(e)}
                    name="진행">진행
            </button>
            <button className={ClassNames({'btn': true, 'btn_complete': todo.status === '완료'})}
                    onClick={(e) => this.handleStatus(e)}
                    name="완료">완료
            </button>
            <button className='btn btn_delete' onClick={() => deleteTodo()}>삭제</button>
          </div>
        </div>
        <div className={ClassNames({'content_main': true, 'is_edit' : this.state.isEdit})}>
          <span className="txt_content" onDoubleClick={(e) => this.handleDoubleClick(e)}>{todo.content}</span>
          <form onSubmit={(e) => this.handleUpdate(e)}>
            <input type="text" className="input_edit" ref="content" name="editData"
                   onChange={(e) => this.setState({...this.state, editData : e.target.value })}
                   value={this.state.editData}
            />
          </form>
        </div>
        <Comment todo={todo} id={this.props.id} addComment={this.props.addComment}/>
      </div>
    )
  }
}

export default Content;