import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/header";

describe("Header", () => {
  it("should contain the header in the document", () => {
    render(<Header />); //ARRANGE
    const myElem = screen.getByTestId("header"); //ACT
    expect(myElem).toBeInTheDocument(); //ASSERT
  });
});
