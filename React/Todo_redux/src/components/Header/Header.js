import React from 'react';
import Textarea from 'react-textarea-autosize';
import AlertContainer from 'react-alert';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : '',
			content : '',
			alertStatus : false
		};
		this.showAlert = this.showAlert.bind(this);
	}
	handleInput(e){
		this.setState({[e.target.name] : e.target.value})
	}
	addTodo(e){
		const name = this.state.name;
		const content = this.state.content;
		if(!name && !content) {return this.showAlert('글 추가에 실패했습니다.');}
		this.props.createTodo(name, content);
		this.setState({name :'', content: ''});
		this.showAlert('글 추가가 성공했습니다.');
	}
	showAlert(message){
		this.msg.show(message, {
			time: 2000,
			type: 'success'
		})
	};
	render() {
		const {name, content} = this.state;
		return (
			<div className="content_box">
				<div className="content_header">
					<div className="wrap_input">
						<input type="text" className="input_name" name="name" value={name} placeholder="이름을 입력해주세요" onChange={(e) => this.handleInput(e)}
						/>
					</div>
					<div className="content_body">
						<Textarea id="content" className="input_content" name="content" value={content} placeholder="오늘의 할일을 적어주세요" onChange={(e) => this.handleInput(e)}
						/>
					</div>
					<div className="wrap_btn">
						<button className="btn btn_write" onClick={(e) => this.addTodo(e)}>작성</button>
					</div>
				</div>
				<AlertContainer ref={a => this.msg = a} {...this.props.alertOptions} />
			</div>
		)
	}
}

export default Header;