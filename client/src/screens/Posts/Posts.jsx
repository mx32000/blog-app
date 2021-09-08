import { useState, useEffect } from "react"
import { getPosts } from "../../services/post"
import Layout from "../../components/Layout/Layout"

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
    <Layout>
      <div>
        {posts.map((post, index) => (
          <p>{post.title}</p>
        ))}
      </div>
    </Layout>
  )
}
