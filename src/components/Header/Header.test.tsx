import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header component", () => {
  const header: string = "weather app";
  render(<Header header={header} />);
  const screenElement = screen.getByText(/weather app/i);
  expect(screenElement).toBeInTheDocument();
});
