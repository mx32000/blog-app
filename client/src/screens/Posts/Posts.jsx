import { useState, useEffect } from "react"
import { getPosts } from "../../services/post"
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"

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
          <div className="post" key={index}>
            <p>{post.title}</p>
            <Link to={`/posts/${post._id}`}>
              <button>See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
