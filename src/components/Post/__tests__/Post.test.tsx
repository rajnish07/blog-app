import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Post from "../post";

const mockPost = {
  title: "Mock Post",
  tags: ["tag1", "tag2", "tag3"],
  reactions: 5,
  body: "Mock post body, any random text.",
};

describe("Post", () => {
  it("should render the Post component", () => {
    render(<Post post={mockPost} />); //ARRANGE
    const post = screen.getByTestId("post"); //ACT
    expect(post).toBeInTheDocument(); //ASSERT
  });

  it("should contain the Title Mock Post", () => {
    render(<Post post={mockPost} />); //ARRANGE
    const postTitle = screen.getByText("Mock Post"); //ACT
    expect(postTitle).toBeInTheDocument(); //ASSERT
  });

  it("should render the reactions count", () => {
    render(<Post post={mockPost} />); //ARRANGE
    const reactions = screen.getByTestId("reactions"); //ACT
    expect(reactions).toBeInTheDocument(); //ASSERT
  });

  it("should render all the tags", () => {
    render(<Post post={mockPost} />); //ARRANGE
    const tags = screen.getAllByTestId("post-tag"); //ACT
    expect(tags).toHaveLength(mockPost.tags.length); //ASSERT
  });

  it("should increase the reactions count on click", async () => {
    render(<Post post={mockPost} />); //ARRANGE
    const react = screen.getByTestId("react");
    await userEvent.click(react);
    const reactions = screen.getByTestId("reactions").textContent;
    expect(reactions).toBe(String(mockPost.reactions + 1));
  });

  it("should reset the reactions count on even no of clicks", async () => {
    render(<Post post={mockPost} />); //ARRANGE
    const react = screen.getByTestId("react");
    await userEvent.click(react);
    await userEvent.click(react);
    const reactions = screen.getByTestId("reactions").textContent;
    expect(reactions).toBe(String(mockPost.reactions));
  });
});
