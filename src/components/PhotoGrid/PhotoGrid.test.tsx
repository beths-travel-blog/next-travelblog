import { render, screen } from "@testing-library/react";
import PhotoGrid from "./PhotoGrid";

// Mock MasonryLayout if it's causing issues
jest.mock("../MasonryLayout/MasonryLayout", () => {
  return jest.fn(({ children }) => <div data-testid="masonry">{children}</div>);
});

describe("PhotoGrid Component", () => {
  it("renders the correct number of images with valid src attributes", () => {
    const images = [
      { url: "https://example.com/image1.jpg" },
      { url: "https://example.com/image2.jpg" },
      { url: "https://example.com/image3.jpg" },
    ];

    render(<PhotoGrid images={images} />);

    const renderedImages = screen.getAllByRole("img");
    expect(renderedImages).toHaveLength(images.length);

    images.forEach((image, index) => {
      expect(renderedImages[index]).toHaveAttribute("src", image.url);
    });
  });
});
