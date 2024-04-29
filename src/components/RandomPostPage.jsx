// RandomPostsPage.jsx

import React, { useState, useEffect } from 'react';
import './RandomPostPage.css'; // Import CSS file

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomPosts = () => {
  const titles = ['Lorem Ipsum', 'Random Title', 'Post Title', 'React Post', 'Sample Post'];
  const contents = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Nulla facilisi.', 'Sed vitae justo sit amet nunc rutrum consequat.', 'Praesent at semper justo.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'];
  
  const posts = [];
  for (let i = 0; i < 10; i++) {
    const title = titles[getRandomNumber(0, titles.length - 1)];
    const content = contents[getRandomNumber(0, contents.length - 1)];
    const upvotes = getRandomNumber(0, 100);
    posts.push({ id: i + 1, title, content, upvotes });
  }
  return posts;
};

const RandomPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const randomPosts = generateRandomPosts();
    setPosts(randomPosts);
  }, []);

  return (
    <div className="random-posts-page">
      <h1>Random Posts</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Upvotes: {post.upvotes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomPostsPage;
