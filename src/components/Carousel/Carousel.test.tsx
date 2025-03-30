import { render, screen, fireEvent } from "@testing-library/react";
import Carousel, { CarouselItem } from "./Carousel"; // Adjust the import path accordingly

describe("Carousel Component", () => {
  test("clicking the Previous button updates active index", () => {
    render(
      <Carousel>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
        <CarouselItem>Slide 4</CarouselItem>
      </Carousel>
    );

    expect(screen.getByText("Slide 1")).toBeInTheDocument();

    const leftButton = screen.getByLabelText("Previous Image");
    fireEvent.click(leftButton);

    // After clicking previous, Slide 4 should be visible (due to circular navigation)
    expect(screen.getByText("Slide 4")).toBeInTheDocument();
  });
});
