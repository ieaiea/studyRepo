import React from 'react';
import Textarea from 'react-textarea-autosize';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : '',
			content : ''
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleInput(e){
		let state = {};
		state[e.target.name] = e.target.value;
		this.setState(state);
	}
	handleClick(e){
		const name = this.state.name;
		const content = this.state.content;
		this.props.addTodo(name, content);
		this.setState({
			name : '',
			content :''
		})
	}

	render() {
		const {name, content} = this.state;
		return (
			<div className="content_box">
				<div className="content_header">
					<div className="wrap_input">
						<input type="text"
									 className="input_name"
									 name="name"
									 onChange={e => this.handleInput(e)}
									 value={name}
									 placeholder="이름을 입력해주세요"
						/>
					</div>
					<div className="wrap_btn">
						<button className="btn btn_write" onClick={this.handleClick} onChange={e => this.handleClick(e)}>작성</button>
					</div>
					<div className="content_body">
						<Textarea id="content"
											className="input_content"
											name="content"
											onChange={e => this.handleInput(e)}
											value={content}
											placeholder="오늘의 할일을 적어주세요"
						/>
					</div>
				</div>
			</div>
		)
	}
}


Header.propTypes = {
  handleInput : React.PropTypes.func,
  handleClick : React.PropTypes.func
};


export default Header;