import { useState, useEffect } from "react"
import { getPosts } from "../../services/post"

export default function Posts() {
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