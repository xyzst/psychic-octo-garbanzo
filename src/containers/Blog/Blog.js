import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: false
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  // ** example of adding css classes/styles to NavLink components
                  // activeClassName="my-active" (default value is 'active')
                  // activeStyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline"
                  // }}
                >
                  Posts
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
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found!</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
