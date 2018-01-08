import React from 'react';
import Comment from './Comment';

class CommentContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : '',
			content : ''
		}
	}
	handleInput(e){
		this.setState({...this.state, [e.target.name] : e.target.value});
	}
	handleComment(e){
		const id = this.props.id;
		const name = this.state.name;
		const content = this.state.content;
		
		if(e.target.name == 'content' && e.keyCode == '13' && name != ''){
			this.props.addComment(id, name, content);
			this.setState({
				name : '',
				content :''
			});
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
					<input type="text" className="input_cname" placeholder="이름" title="이름"
					       onChange={(e) => this.handleInput(e)}
					       name="name"
					       ref="inputName"
					       value={this.state.name}
					/>
					<input type="text" className="input_comment" placeholder="댓글 내용을 입력해주세요" title="내용"
					       onChange={(e) => this.handleInput(e)}
					       onKeyUp={(e) => this.handleComment(e)}
					       name="content"
					       value={this.state.content}
					/>
				</div>
			</div>
		)
	}
}

export default CommentContainer;