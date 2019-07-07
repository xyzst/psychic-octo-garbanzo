import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  // ** example of adding css classes/styles to NavLink components
                  // activeClassName="my-active" (default value is 'active')
                  // activeStyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline"
                  // }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {
          // can add any number of Route objects/components
          // <Route path="/" exact render={ () => <h1>blah</h1>} />
        }
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
