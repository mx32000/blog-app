import "./App.css";
import { getPosts } from "./services/post.js";
import { useState, useEffect } from "react";

function App() {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      { posts.map((post, index) => <p>{post.title}</p>) }
    </div>
  );
}

export default App;
