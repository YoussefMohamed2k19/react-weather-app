import { render } from "@testing-library/react";
import ResultComponent from "./ResultComponent";

test("Testing the ResultComponent", () => {
  let store = {
    dataState: {
      result: {
        main: {
          temp: 10,
          humidity: 78,
          pressure: 1008,
        },
        sys: {
          sunrise: 1662523476,
          sunset: 1662523476,
        },
        timezone: 7200,
        wind: {
          speed: 7.8,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
    },
  };
  const { container } = render(<ResultComponent store={store} />);
  expect(container).toMatchSnapshot();
});
