import React from 'react';
import Comment from '../../components/Comment/Comment';
import {connect} from 'react-redux';
import {createComment} from '../../actions';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	    cName: '',
	    cContent: ''
    }
  }

  handleInput(e) {
	  this.setState({[e.target.name] : e.target.value});
  }
  
  handleKeyDowm(e){
	  const id = this.props.id;
	  const name = this.state.cName;
	  const content = this.state.cContent;
	
	  if(e.keyCode === 13){
		  this.props.createComment(id, name, content);
		  this.setState({cName : '', cContent : ''});
		  this.refs.inputName.focus();
	  }
  }

  render() {
    const commentView = this.props.todo.comment.map((comment, idx) => (
      <Comment comment={comment} key={idx}/>
    ));
    return (
      <div>
        <div className="content_footer">
          <ul className="list_comment">
            {commentView}
          </ul>
          <input type="text" className="input_cname"
                 placeholder="이름"
                 title="이름"
                 name="cName"
                 ref="inputName"
                 value={this.state.cName}
                 onChange={(e) => this.handleInput(e)}
          />
          <input type="text" className="input_comment"
                 placeholder="댓글 내용을 입력해주세요"
                 title="내용"
                 name="cContent"
                 value={this.state.cContent}
                 onChange={(e) => this.handleInput(e)}
                 onKeyDown={(e) => this.handleKeyDowm(e)}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    alertOptions : state.alertOptions
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createComment : (id, name, content) => {
      dispatch(createComment(id, name, content));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);