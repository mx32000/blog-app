import "./App.css";
import { getPosts } from "./services/post.js";

function App() {
  const posts = getPosts();

  return (
    {
      posts.map((post, index) => <p>{post.title}</p>)
    }
  );
}

export default App;
