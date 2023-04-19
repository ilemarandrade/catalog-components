import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGQ4YWNiNDQxNDMzOTBlOWMzZTM3MzFhZTg1ODM5MyIsInN1YiI6IjYzZjkzOWMxMjVhNTM2MDBkZDZjMDdjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcDHv0COyQTGKsJ3b9wOR6wWNKz977CzJZE0Q-D1PcQ",
  },
});

export default axiosInstance;
