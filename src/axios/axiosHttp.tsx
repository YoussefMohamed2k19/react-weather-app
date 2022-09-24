import axios from "axios";
import { store } from "../store/store";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.REACT_APP_WEATHER_APP_PASSWORD,
  },
});

// axios interceptors can be used to apply the isLoading & status logic

axiosInstance.interceptors.request.use((request) => {
  let { setIsLoading, setStatus } = store;
  setStatus(true);
  setIsLoading(true);
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    let { setIsLoading, setStatus } = store;
    setIsLoading(false);
    setStatus(true);
    return response;
  },
  (error) => {
    let { setIsLoading, setStatus } = store;
    setIsLoading(false);
    setStatus(false);
  }
);
