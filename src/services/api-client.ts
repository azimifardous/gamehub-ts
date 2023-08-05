import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4be152621897431baa2c04ee1ceb8c92",
  },
});

class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
}

export default ApiClient;
