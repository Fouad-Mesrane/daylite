import React, { useState } from "react";

export function PostForm() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (post.trim() !== "") {
      if (editingIndex !== null) {
        const updatedPosts = posts.map((item, index) =>
          index === editingIndex ? post : item
        );
        setPosts(updatedPosts);
        setEditingIndex(null);
      } else {
        setPosts([post, ...posts]);
      }
      setPost("");
    }
  };

  const handleEdit = (index) => {
    setPost(posts[index]); 
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filteredPosts = posts.filter((_, i) => i !== index);
    setPosts(filteredPosts);
  };

  return (
    <div>
      <h2>{editingIndex !== null ? "Edit Post" : "Create a Post"}</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={post}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
        />
        <br />
        <button type="submit">{editingIndex !== null ? "Update Post" : "Post"}</button>
      </form>

      <h3>Recent Posts:</h3>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
