import React from 'react';
import './Post.scss';
import {Link} from 'react-router-dom';

const Post = ({data}) => {
	const url = `/detail/${1}`;
	return (
		<Link to={url}>
			<li>
					<span className="title_post">{data.title}</span>
					<span className="date_post">{data.date}</span>
			</li>
		</Link>
	)
};


export default Post;