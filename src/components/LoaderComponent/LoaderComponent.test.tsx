import React from "react";

import { render, screen } from "@testing-library/react";
import LoaderComponent from "./LoaderComponent";

describe("Testing LoaderComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  let result = {
    name: "Dhaka",
    sys: {
      country: "BD",
    },
  };

  test("check if LoaderComponent renders default message", () => {
    const store = {
      isLoading: false,
      status: true,
      cityName: "",
      result,
    };
    render(<LoaderComponent store={store} />);
    const screenElement = screen.getByText(/Search for a city/i);
    expect(screenElement).toBeInTheDocument();
  });

  test("check if LoaderComponent renders a loading message", () => {
    const store = {
      isLoading: true,
      status: true,
      cityName: "someCityName",
      result,
    };
    render(<LoaderComponent store={store} />);
    const screenElement = screen.getByText(/loading, please wait..../i);
    expect(screenElement).toBeInTheDocument();
  });

  test("check if LoaderComponent renders a failed status message", () => {
    const store = {
      isLoading: false,
      status: false,
      cityName: "someCityName",
      result,
    };
    render(<LoaderComponent store={store} />);
    const screenElement = screen.getByText(/City not found/i);
    expect(screenElement).toBeInTheDocument();
  });

  test("check if LoaderComponent successfully renders city name", () => {
    const store = {
      isLoading: false,
      status: true,
      cityName: "Dhaka",
      result,
    };
    render(<LoaderComponent store={store} />);
    const screenElement = screen.getByText(/Dhaka, BD/i);
    expect(screenElement).toBeInTheDocument();
  });
});
