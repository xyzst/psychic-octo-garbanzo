import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

instance.defaults.headers.common["Authorization"] = "some other auth token ...";

export default instance;
