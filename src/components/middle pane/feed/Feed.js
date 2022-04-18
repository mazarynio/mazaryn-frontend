import React from "react";
import "./Feed.css";
import PostCard from "../Cards/PostCard";
import Post from "./Post";

const Feed = (props) => {
  return (
    <div className="main w-full">
      <div className="flex flex-col align-center  items-center">
        <PostCard />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
