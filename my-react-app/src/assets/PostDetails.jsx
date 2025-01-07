import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>; // Show loading message while fetching

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetails;
