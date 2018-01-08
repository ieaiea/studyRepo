import React from 'react';
import {PostList, PageNation} from '../../components';

class PostContainer extends React.Component {
  render() {
    const {history} = this.props;
    const category = history.location.pathname;
    const demp = [
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'},
      {'title':'제목제목','date':'2시간전'}
    ];
    return (
      <div className="wrap_post">
        <h2 className="title_content">Category > {category.split('/')[1]}</h2>
        <PostList data={demp} history={history}/>
        <PageNation data={demp}/>
      </div>
    )
  }
}

export default PostContainer;