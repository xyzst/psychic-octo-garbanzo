import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route } from "react-router-dom";

class Blog extends Component {
  render() {
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
        {
          // can add any number of Route objects/components
        }
        <Route path="/" exact component={Posts} />
      </div>
    );
  }
}

export default Blog;
