import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

test("uses a class component", () => {
  expect(isClassComponent(App)).toBe(true);
});

test("displays in 'light' mode when initialized", () => {
  render(<App />);
  expect(screen.getByRole("button")).toHaveClass("light");
});

test("changes to 'dark' mode when the button is clicked", () => {
  render(<App />);
  expect(screen.getByRole("button")).toHaveClass("light");

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole("button")).toHaveClass("dark");
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  render(<App />);
  expect(screen.getByRole("button")).toHaveClass("light");

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole("button")).toHaveClass("dark");

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole("button")).toHaveClass("light");
});
