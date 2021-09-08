import { useState } from "react";
import { createPost } from "../../services/post";

export default function Form() {
  const [isCreated, setCreated] = useState(false);

  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    image_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Title"
        id="title"
        name="title"
        value={post.title}
      />
      <textarea
        onChange={handleChange}
        placeholder="Write here"
        id="content"
        name="content"
        value={post.content}
      />

      <input
        onChange={handleChange}
        type="text"
        placeholder="Image link"
        id="image_url"
        name="image_url"
        value={post.image_url}
      />

      <input
        onChange={handleChange}
        type="text"
        placeholder="Author"
        id="author"
        name="author"
        value={post.author}
      />
      <button>Submit</button>
    </form>
  );
}
