import { axiosInstance } from "../axios/axiosHttp";

export const fetchData = async (cityName) => {
  const password = process.env.REACT_APP_WEATHER_APP_PASSWORD;
  const units = `metric`;
  const api = `?q=${cityName}&units=${units}&appid=${password}`;

  return await axiosInstance
    .get(api)
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
