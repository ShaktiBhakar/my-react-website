import React, { useEffect, useState } from "react";

const App = () => {
  // State to store posts
  const [posts, setPosts] = useState([]);

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Updated to fetch posts from JSONPlaceholder
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data); // Save posts to state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Posts</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h2 style={{ marginBottom: "5px" }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
