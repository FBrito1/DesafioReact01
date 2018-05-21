import React from 'react';
import Proptypes from 'prop-types';

import PostHeader from '../components/PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader data={props} />
    <hr />
    <p>{props.data.postBody}</p>
  </div>
);

Post.propTypes = {
  data: Proptypes.shape({
    postBody: Proptypes.string,
  }).isRequired,
};

export default Post;
