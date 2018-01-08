import React from 'react';
import ClassNames from 'classnames';
import TimeAgo from 'react-timeago'
import Comment from '../../containers/Comment/CommentContainer';
import AlertContainer from 'react-alert';

/* <div className="prev_comment"><button>이전 3개 댓글 보기<span className="icon icon_more"/></button></div> 댓글 보류 */
class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
	    editData : ''
    }
  }
  handleInput(e){
	  this.setState({editData : e.target.value});
  }
  handleUpdateMode(){
	  this.setState({editData : this.props.todo.content});
	  this.props.updateMode();
  }
  handleSubmit(e){
    e.preventDefault();
    const id = this.props.id;
    const content = this.state.editData;
    this.props.updateTodo(id, content);
	  this.props.updateMode();
	  this.showAlert('수정이 완료되었습니다.');
  }
  handleStatus(e){
    const status = e.target.innerText;
    const id = this.props.id;
	  this.props.updateStatus(id, status);
	  this.showAlert(`${status} 상태가 변경되었습니다.`);
  }
	showAlert(message){
		this.msg.show(message, {
			time: 2000,
			type: 'success'
		})
	};
  render() {
    const {todo, isEdit, id, deleteTodo} = this.props;
    const {editData} = this.state;
    return (
      <div className="content_box">
        <div className="content_header">
          <h2 className="tit_name">{todo.name}<TimeAgo className="txt_date" date={todo.date}/></h2>
          <div className="wrap_btn">
            <button className={ClassNames({'btn': true, 'btn_start': todo.status === '진행'})} onClick={(e) => this.handleStatus(e)}>진행
            </button>
            <button className={ClassNames({'btn': true, 'btn_complete': todo.status === '완료'})} onClick={(e) => this.handleStatus(e)}>완료
            </button>
            <button className='btn btn_delete' onClick={(e) => {deleteTodo()}}>삭제</button>
          </div>
        </div>
        <div className={ClassNames({'content_main': true, 'is_edit' : isEdit})}>
          <span className="txt_content" onDoubleClick={(e) => this.handleUpdateMode()}>{todo.content}</span>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" className="input_edit" name="editData" value={editData} onChange={(e) => this.handleInput(e)}/>
          </form>
        </div>
        <Comment todo={todo} id={id}/>
        <AlertContainer ref={a => this.msg = a} {...this.props.alertOptions}/>
      </div>
    )
  }
}

export default Content;