import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
