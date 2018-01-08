import React from 'react';
import './Detail.scss';

const Detail = ({data}) => {
	return (
		<div className="wrap_detail">
			<div className="date_detail">{data.date}</div>
			<h2 className="title_detail">{data.title}</h2>
			<div className="txt_detail">
				내용이들어가요
			</div>
			<div className="wrap_author">
				<img src="https://github.com/appear/appear.make_blog/blob/master/public/icon/avatar.png?raw=true" alt="작성자이미지"/>
				<div className="box_author">
					<span className="class_author">Author</span>
					<span className="txt_author">고석진</span>
				</div>
			</div>
		</div>
	)
};

export default Detail;