import React, { useState } from 'react';
import "./Comment.css"

const Comments = () => {
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentText = event.target.comment.value;
    const newComment = {
      text: commentText,
      author: 'Anonymous', // You can customize the author field
    };
    setComments([...comments, newComment]);
    event.target.comment.value = ''; // Clear the input field
  };

  const Comment = ({ text, author }) => {
    return (
      <div className='comments'>
        <p>{text}</p>
        <p className='commentor'>By: {author}</p>
      </div>
    );
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment.text} author={comment.author} />
      ))}
      <form onSubmit={handleSubmit}>
      <textarea typeof='text' name="comment" placeholder='Leave a comment...' cols="70" rows="10" className="comment-input"></textarea>
        {/* <input type="text" name="comment"  className=''/> */}
        <button type="submit" className='submit-btn'>Post a Comment</button>
      </form>
    </div>
  );
};

export default Comments;
