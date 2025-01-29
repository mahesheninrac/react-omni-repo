// src/pages/Home.jsx
import React from "react";
import SearchUsers from "../components/SearchUsers";
import FriendRequests from "../components/FriendRequests";
import FriendList from "../components/FriendList";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Friend App</h1>
      <SearchUsers />
      <FriendRequests />
      <FriendList />
    </div>
  );
};

export default Home;
