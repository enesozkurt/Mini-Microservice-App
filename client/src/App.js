import './App.css';
import PostCreate from "./component/PostCreate";
import PostList from "./component/PostList";

function App() {
  return (
    <div className="container">
      <PostCreate />
        <hr/>
        <h1>Posts</h1>
        <PostList />
    </div>
  );
}

export default App;
