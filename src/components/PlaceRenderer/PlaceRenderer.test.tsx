import { render, screen } from "@testing-library/react";

import PlaceRenderer from "./PlaceRenderer";
import SafeHtml from "../../elements/SafeHtml";

jest.mock("../../elements/SafeHtml", () => ({
  __esModule: true,
  default: jest.fn(({ content }) => <div data-testid="safe-html">{content}</div>),
}));

describe("PlaceRenderer", () => {
  const mockProps = {
    title: "Sample Place",
    image: { url: "https://example.com/sample.jpg" },
    datePublished: "2024-03-29T12:00:00Z",
    thingsToDo: { html: "<p>Explore the city</p>" },
    whereToEat: { html: "<p>Try local food</p>" },
    whereToStay: { html: "<p>Stay at a cozy hotel</p>" },
  };

  it("renders the title and formatted date", () => {
    render(<PlaceRenderer {...mockProps} />);
    
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(mockProps.title);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("29 Mar 2024");
  });

  it("renders SafeHtml components with the correct content", () => {
    render(<PlaceRenderer {...mockProps} />);

    expect(SafeHtml).toHaveBeenCalledWith(
      { content: mockProps.whereToStay.html },
      expect.anything()
    );
    expect(SafeHtml).toHaveBeenCalledWith(
      { content: mockProps.whereToEat.html },
      expect.anything()
    );
    expect(SafeHtml).toHaveBeenCalledWith(
      { content: mockProps.thingsToDo.html },
      expect.anything()
    );
  });
});