import { render, screen } from "@testing-library/react";
import TimeZone from "./TimeZone";

test("Checks if TimeZone returns a time", () => {
  // sweden sunrise and timezone
  const input = 1662523476;
  const timezone = 7200;
  render(<TimeZone input={input} timezone={timezone} />);
  const screenElement = screen.getByText(/6 : 04 AM/i);
  expect(screenElement).toBeInTheDocument();
});
