import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders SearchBar Component", () => {
  expect(SearchBar).toMatchSnapshot();
});
