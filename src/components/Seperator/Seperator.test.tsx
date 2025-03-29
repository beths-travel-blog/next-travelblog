import React from "react";
import { render, screen } from "@testing-library/react";

import Seperator from "./Seperator";

describe("Seperator Component", () => {
  it("renders the component with the given text", () => {
    const testText = "Sample Text";
    render(<Seperator text={testText} />);
    
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("H3");
  });

  it("renders the separator lines", () => {
    render(<Seperator text="Separator Text" />);
    
    const separatorLines = screen.getAllByRole("presentation");
    expect(separatorLines.length).toBe(2); // One for each separator line
  });
});
