import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

const mockData = [
  { title: "Paris", slug: "paris", country: { slug: "france", continent: { slug: "europe" } } },
  { title: "Berlin", slug: "berlin", country: { slug: "germany", continent: { slug: "europe" } } },
  { title: "New York", slug: "new-york", country: { slug: "usa", continent: { slug: "north-america" } } },
];

describe("SearchBar Component", () => {
  it("renders the search input", () => {
    render(<SearchBar placeholder="Search..." data={mockData} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  it("filters results based on input", () => {
    render(<SearchBar placeholder="Search..." data={mockData} />);
    const inputElement = screen.getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "Paris" } });
    const resultElement = screen.getByText("Paris");

    expect(resultElement).toBeInTheDocument();
  });

  it("clears the input when the close icon is clicked", () => {
    render(<SearchBar placeholder="Search..." data={mockData} />);
    const inputElement = screen.getByPlaceholderText("Search...");

    // Type in the input
    fireEvent.change(inputElement, { target: { value: "Paris" } });
    expect(inputElement).toHaveValue("Paris");

    // Click the clear (close) button
    const closeButton = screen.getByAltText("Close");
    fireEvent.click(closeButton);

    expect(inputElement).toHaveValue("");
  });

  it("renders no results when input does not match any data", () => {
    render(<SearchBar placeholder="Search..." data={mockData} />);
    const inputElement = screen.getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "Unknown" } });
    const resultsContainer = screen.queryByText("Paris");

    expect(resultsContainer).not.toBeInTheDocument();
  });
});
