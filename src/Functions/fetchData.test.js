import { fetchData } from "./fetchData";

describe("testing various instances of the fetchData function", () => {
  const cityName = "Dhaka";
  const wrongCityName = "Dhakasdvfcssdsc";

  test("check if fetchData function loads data properly", async () => {
    let fetchResults = await fetchData(cityName);
    expect(fetchResults?.name).toBe(cityName);
  });

  test("check if fetchData function loads undefined on fetching wrong city name", async () => {
    let fetchResults = await fetchData(wrongCityName);
    expect(fetchResults).toBe(undefined);
  });
});
