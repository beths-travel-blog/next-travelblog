import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavItems from "./NavItems";

const mockContinents = [
  { title: "Europe", slug: "europe" },
  { title: "Asia", slug: "asia" },
];

const mockCountryData = [{ name: "France" }, { name: "Japan" }];

describe("NavItems Component", () => {
  test("renders menu button and toggles menu", () => {
    render(
      <NavItems continents={mockContinents} countryData={mockCountryData} />
    );

    const menuButton = screen.getByAltText("Menu Burger Icon/Close Menu Icon");
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Destinations")).toBeInTheDocument();
    expect(screen.getByText("Travel Tips")).toBeInTheDocument();
  });
});
