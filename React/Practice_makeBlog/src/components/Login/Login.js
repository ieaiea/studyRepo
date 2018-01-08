import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';

const Login = () => {
	const beforeView = (
		<div>
			<div className="wrap_img">
				<img src="https://github.com/appear/appear.make_blog/blob/master/public/icon/avatar.png?raw=true" alt="로그인 이미지"/>
			</div>
			<Link to="/login"><button className="btn_login">로그인</button></Link>
		</div>
	);

	return (
		<div className="wrap_login">
			{beforeView}
		</div>
	)
};

export default Login;