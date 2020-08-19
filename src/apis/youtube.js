import axios from "axios";

const API_KEY = "AIzaSyDz16TDJAet4AzZ3EqkLwbCwgmOmpgnB58";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
    type: "video",
    part: "snippet",
    maxResults: 5,
  },
});
