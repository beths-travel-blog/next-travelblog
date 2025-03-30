import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("./styles", () => ({
  BlogCardContainer: "div",
  BlogCardImage: "img",
  BlogTextContainer: "div",
  ArticleTitle: "h2"
}));

describe("BlogCard Component", () => {
  const mockProps = {
    title: "Sample Blog Post",
    postLink: "/sample-post",
    image: { url: "https://via.placeholder.com/150" },
  };

  test("renders BlogCard with correct content", () => {
    render(
      <Router>
        <BlogCard {...mockProps} />
      </Router>
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.image.url);
    expect(image).toHaveAttribute("alt", mockProps.title);

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent(mockProps.title);

    const links = screen.getAllByRole("link");
    links.forEach(link => expect(link).toHaveAttribute("href", mockProps.postLink));
  });
});