import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          PostsApp
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="link" to="/posts/new">
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
