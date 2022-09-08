import axios from "../axios/axios";

export const fetchData = async (
  cityName,
  setResult,
  setStatus,
  setIsLoading
) => {
  const password = process.env.REACT_APP_WEATHER_APP_PASSWORD;
  const units = `metric`;
  const api = `?q=${cityName}&units=${units}&appid=${password}`;

  setResult([]);
  setStatus(true);
  setIsLoading(true);

  return await axios
    .get(api)
    .then((res) => {
      setIsLoading(false);
      setStatus(true);
      setResult(res?.data);
    })
    .catch((err) => {
      setIsLoading(false);
      setStatus(false);
      console.log(err);
    });
};
