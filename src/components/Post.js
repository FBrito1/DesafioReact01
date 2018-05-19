import React from 'react';

import PostHeader from '../components/PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader data={props} />
    <hr />
    <p>{props.data.postBody}</p>
  </div>
);

export default Post;
