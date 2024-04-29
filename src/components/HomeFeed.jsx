// HomeFeed.jsx
import React from 'react';

const HomeFeed = ({ posts }) => {
  return (
    <div className="home-feed">
      <h2>Home Feed</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Upvotes: {post.upvotes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeFeed;

