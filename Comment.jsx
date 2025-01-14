import React from 'react';

const Comment = ({ name, body, email }) => {
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>{body}</p>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>{email}</p>
    </div>
  );
};

export default Comment;
