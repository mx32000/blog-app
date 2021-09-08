import "./App.css";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/posts" component={Posts}/>
      <Route path="/posts/new" component={PostCreate}/>
      <Route path="/posts/:id/edit" component={PostEdit}/>
      <Route path="/posts/:id" component={PostDetail}/>
    </Switch>
  );
}

export default App;
