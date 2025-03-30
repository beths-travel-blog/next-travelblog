import { render, screen } from "@testing-library/react";
import BlogCardGrid from "./BlogCardGrid";

jest.mock("../BlogCard/BlogCard", () => {
    const MockBlogCard = () => <div data-testid="blog-card">Mock BlogCard</div>;
    MockBlogCard.displayName = "MockBlogCard";
    return MockBlogCard;
  });

describe("BlogCardGrid Component", () => {
  test("renders blog cards with correct props", () => {
    const mockBlogPosts = [
      {
        title: "Test Post 1",
        placeSlug: "test-post-1",
        image: { url: "https://example.com/image1.jpg" },
        country: { title: "France", slug: "france", continent: "europe" },
      },
      {
        title: "Test Post 2",
        placeSlug: "test-post-2",
        image: { url: "https://example.com/image2.jpg" },
        country: { title: "Germany", slug: "germany", continent: "europe"},
      },
    ];

    render(<BlogCardGrid blogPosts={mockBlogPosts} postGrid={true} />);

    const blogCards = screen.getAllByTestId("blog-card");
    expect(blogCards.length).toBe(mockBlogPosts.length);
  });
});

