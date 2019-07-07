import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import "./Posts.css";
// import { Link } from "react-router-dom";
class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
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
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/" + id });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(x => {
        return (
          //   <Link key={x.id} to={"/" + x.id}>
          <Post
            key={x.id}
            title={x.title}
            author={x.author}
            clicked={() => this.postSelectedHandler(x.id)}
          />
          //   </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
