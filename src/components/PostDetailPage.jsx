// PostDetailPage.jsx
import React from 'react';

const PostDetailPage = ({ post }) => {
  return (
    <div className="post-detail-page">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Upvotes: {post.upvotes}</p>
    </div>
  );
};

export default PostDetailPage;
