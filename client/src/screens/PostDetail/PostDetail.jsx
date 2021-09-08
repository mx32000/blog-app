import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPost, deletePost } from "../../services/post"
import Layout from "../../components/Layout/Layout"

export default function PostDetail() {
  const [post, setPost] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setIsLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return (
      <Layout>
        <h1>loadingggg</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      <img src={post.image_url} alt="picture" />
      <p>{post.content}</p>
      <p>{post.author}</p>
      <Link to={`/posts/${post._id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => deletePost(post._id)}>Delete</button>
    </Layout>
  )
}
