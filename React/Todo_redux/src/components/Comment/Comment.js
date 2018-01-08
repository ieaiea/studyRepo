import React from 'react';
import TimeAgo from 'react-timeago';

const Comment = ({comment}) => (
  <li>
    <div className="comment_header">
      <span className="comment_name">{comment.name}</span>
      <TimeAgo className="txt_date" date={comment.date}>{comment.date}</TimeAgo>
    </div>
    <span className="comment_body">{comment.content}</span>
  </li>
);

export default Comment;

