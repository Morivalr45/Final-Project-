// PostForm.jsx
import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
