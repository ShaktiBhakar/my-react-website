import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h2>
              <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "blue" }}>
                {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
