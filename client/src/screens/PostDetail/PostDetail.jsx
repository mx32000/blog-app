import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPost } from "../../services/post"
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
    </Layout>
  )
}
