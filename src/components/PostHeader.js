import React from 'react';

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

export default PostHeader;
