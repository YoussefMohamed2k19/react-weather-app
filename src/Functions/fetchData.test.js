import { fetchData } from "./fetchData";

describe("testing various instances of the fetchData function", () => {
  const cityName = "Dhaka";
  const wrongCityName = "Dhakasdvfcssdsc";
  var result = [];
  var status;
  var isLoading;
  const setStatus = (data) => (status = data);
  const setIsLoading = (data) => (isLoading = data);
  const setResult = (data) => (result = data);

  test("check if fetchData function loads data properly", async () => {
    await fetchData(cityName, setResult, setStatus, setIsLoading);
    expect(result?.name).toBe(cityName);
    expect(status).toBe(true);
    expect(isLoading).toBe(false);
  });

  test("check if fetchData function loads ERROR status on fetching wrong city name", async () => {
    await fetchData(wrongCityName, setResult, setStatus, setIsLoading);
    expect(status).toBe(false);
    expect(result).toStrictEqual([]);
    expect(isLoading).toBe(false);
  });
});
