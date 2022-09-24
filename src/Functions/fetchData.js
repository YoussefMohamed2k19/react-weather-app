import { axiosInstance } from "../axios/axiosHttp";

export const fetchData = async (cityName) => {
  const units = `metric`;
  const api = `?q=${cityName}&units=${units}`;

  return await axiosInstance
    .get(api)
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
