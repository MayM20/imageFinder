import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID eab007060d96a5507f37453e1cba4c74da29433b646c1c3eba34ce520fa14237"
  }
});
