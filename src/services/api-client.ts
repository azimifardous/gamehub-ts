import axios from "axios";

export interface FetchResponse<T> {
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4be152621897431baa2c04ee1ceb8c92",
  },
});
