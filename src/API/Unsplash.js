import axios from "axios";
import unsplashToken from "./Tokens";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${unsplashToken}`
  }
});
