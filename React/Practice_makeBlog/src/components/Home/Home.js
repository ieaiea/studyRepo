import React from 'react';
import './Home.scss';

const Home = ({homePost, notify, update}) => {
	return (
		<div className="content_home">
			{homePost}
			{notify}
			{update}
		</div>
	)
};

export default Home;