import axios from "axios";

function axiosServerInstance(req) {
  return axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" },
  });
}

function axiosClientInstance() {
  return axios.create({
    baseURL: "/api",
  });
}

export { axiosServerInstance, axiosClientInstance };
