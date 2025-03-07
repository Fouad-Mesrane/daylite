import React from "react";
import RandomArticle from "./RandomArticle";

const userPosts = [
  {
    id: 1,
    username: "JaneDoe",
    content: "I just completed a puzzle with 1,000 pieces. Yay for alone time!",
  },
  {
    id: 2,
    username: "IntrovertKing",
    content: "The best kind of socializing is no socializing at all.",
  },
  {
    id: 3,
    username: "QuietThoughts",
    content: "Why isn't silence considered a language yet?",
  },
];

function Feed() {
  return (
    <div className="feed-container">
      <h2>something may go here</h2>
      {userPosts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      <div className="article-card">
        <RandomArticle />
      </div>
    </div>
  );
}

export default Feed;
