import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { name, postTime, postAvatar } = props.data.data;
  return (
    <div className="postHeader">
      <img src={postAvatar} alt="avatar" />
      <div className="postHeaderTitle">
        <h2>{name}</h2>
        <p>{postTime}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    postTime: PropTypes.string,
    postAvatar: PropTypes.string,
  }).isRequired,
};


export default PostHeader;
