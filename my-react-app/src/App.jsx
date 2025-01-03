import React, { useEffect, useState } from "react";

const App = () => {
  // State to store user data
  const [users, setUsers] = useState([]);

  // Fetch data from RandomUser.me API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setUsers(data.results); // Save user data to state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Users</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.login.uuid} style={{ marginBottom: "20px" }}>
            <h2 style={{ marginBottom: "5px" }}>
              <a
                href={`/user/${user.id.value || user.login.uuid}`} 
                style={{ textDecoration: "underline", color: "grey" }}
              >
                {user.name.first} {user.name.last}
              </a>
            </h2>
            <p>{user.email}</p>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
