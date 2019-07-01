import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(p => {
          return {
            ...p,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler(id) {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(x => {
        return (
          <Post
            key={x.id}
            title={x.title}
            author={x.author}
            clicked={() => this.postSelectedHandler(x.id)}
          />
        );
      });
    }
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Blog;
