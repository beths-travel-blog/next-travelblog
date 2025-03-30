import { render, screen, fireEvent } from "@testing-library/react";
import Logo from "./Logo"; // Adjust the import path as needed

describe("Logo Component", () => {
  test("renders the logo images", () => {
    render(<Logo />);

    // Check if the images are in the document by their alt text
    const planeImage = screen.getByAltText("Plane image for logo");
    const nameImage = screen.getByAltText("Plane It By Ear");

    // Assert that both images are in the document
    expect(planeImage).toBeInTheDocument();
    expect(nameImage).toBeInTheDocument();
  });

});