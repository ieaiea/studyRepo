import React from 'react';
import Post from './Post';

const PostList = ({data, history}) => {
  const posts = data.map((item, idx) => (
    <Post key={idx} data={item}/>
  ));
  return (
    <ul className="list_post">
      {posts}
    </ul>
  )
};

export default PostList;