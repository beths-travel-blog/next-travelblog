import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// Mock window.scrollTo to prevent test errors
beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders Footer component", () => {
  render(<Footer />);
  const footerText = screen.getByText(/Copyright © Plane It By Ear. All Rights Reserved./);
  expect(footerText).toBeInTheDocument();
});
