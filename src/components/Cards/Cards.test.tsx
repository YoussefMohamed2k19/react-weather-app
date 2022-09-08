import { render, screen } from "@testing-library/react";
import Cards from "./Cards";
import TimeZone from "../TimeZone/TimeZone";

describe("Check Card Component", () => {
  const data = 15.88;
  const label = "temperature";
  const unit = "° C";
  const icon = "bi bi-droplet";
  const weather = [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
  ];

  test("Checks if a card with icon and data loads or not", () => {
    const { container } = render(
      <Cards icon={icon} label={label} unit={unit} data={data} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Checks if a card with image and data loads or not", () => {
    const { container } = render(
      <Cards weather={weather} data={data} label={label} unit={unit} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Checks if a card with local time and icon loads or not", () => {
    const input = 1662523476;
    const timezone = 7200;
    const { container } = render(
      <Cards
        data={<TimeZone input={input} timezone={timezone} />}
        label="Sun Rise"
        icon="bi bi-sunrise"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
