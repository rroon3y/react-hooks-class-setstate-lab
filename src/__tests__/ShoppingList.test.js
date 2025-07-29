import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

function isClassComponent(component) {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
}

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("uses a class component", () => {
  expect(isClassComponent(ShoppingList)).toBe(true);
});

test("displays all items when initially rendered", () => {
  render(<ShoppingList items={testData} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  render(<ShoppingList items={testData} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  expect(screen.getAllByRole("listitem")).toHaveLength(2);

  expect(screen.getAllByRole("listitem")).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });

  expect(screen.getAllByRole("listitem")).toHaveLength(1);
});
