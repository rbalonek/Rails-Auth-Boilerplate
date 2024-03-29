import axios from "axios";

// const baseUrl = "https://rails-auth-pratice-boilerplate.herokuapp.com/";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://auth-practice-boilerplate-rails-db.fly.dev/"
    // "https://rails-auth-pratice-boilerplate.herokuapp.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
