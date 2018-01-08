import React from 'react';
import {PostList, Home} from '../../components';

class HomeContainer extends React.Component {
	render() {
    const demp = [
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'}
    ];
		const update = (
			<div className="wrap_item">
				<h2 className="title_item">Update</h2>
				<PostList data={demp}/>
			</div>
		);
		const notify = (
			<div className="wrap_item">
				<h2 className="title_item">Notify</h2>
				<PostList data={demp}/>
			</div>
		);
		const homePost = (
			<div className="wrap_item">
				<h2 className="title_item">Post</h2>
				<PostList data={demp}/>
			</div>
		);
		return (
			<Home update={update} notify={notify} homePost={homePost}/>
		)
	}
}

export default HomeContainer;