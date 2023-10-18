import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.111.255.133:3333",
  // baseURL: "http://localhost:3333",
});
