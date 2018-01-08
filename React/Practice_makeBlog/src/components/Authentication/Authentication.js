import React from 'react';
import './Authentication.scss';
import {Link} from 'react-router-dom';

const Authentication = ({mode}) => {

  const loginBtn = (
    <div className="wrap_btn">
      <button className="btn">로그인</button>
      <Link to="/register"><button className="btn">회원가입</button></Link>
      <button className="btn kakao">카카오</button>
      <button className="btn facebook">페이스북</button>
    </div>
  );
  const registerBtn = (
    <div className="wrap_btn">
      <button className="btn btn_register">가입</button>
      <Link to="/login"><button className="btn btn_register">돌아가기</button></Link>
    </div>
  );
  const commonForm = (
    <div>
      <div className="input">
        <label className="screen_out">이메일</label>
        <input type="text" title="email" name="email" placeholder="Email"/>
      </div>
      <div className="input">
        <label className="screen_out">패스워드</label>
        <input type="password" title="password" name="password" placeholder="Password"/>
      </div>
    </div>
  );

  return (
    <div className="wrap_form">
      <h2 className="txt_title">{mode ? '로그인' : '회원가입'}</h2>
      <div className="box_input">
        {commonForm}
      </div>
      {mode ? loginBtn : registerBtn }
    </div>
  )
};

export default Authentication;