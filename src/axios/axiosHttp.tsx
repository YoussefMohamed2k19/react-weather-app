import axios from "axios";
import { store } from "../store";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: 'b3528849799fc69ab2e46bdd46794f25',
  },
});

// axios interceptors can be used to apply the isLoading & status logic

axiosInstance.interceptors.request.use((request) => {
  let { loaderState } = store;
  let { setIsLoading, setStatus } = loaderState;
  setStatus(true);
  setIsLoading(true);
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    let { loaderState } = store;
    let { setIsLoading, setStatus } = loaderState;
    setIsLoading(false);
    setStatus(true);
    return response;
  },
  (error) => {
    let { loaderState } = store;
    let { setIsLoading, setStatus } = loaderState;
    setIsLoading(false);
    setStatus(false);
  }
);
