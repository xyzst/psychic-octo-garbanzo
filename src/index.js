import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers.common["Authorization"] =
  "some auth token, probably shouldnt use this in prod";
axios.defaults.headers.common["Accept"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log(request);
    // Add headers here for EVERY request
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
