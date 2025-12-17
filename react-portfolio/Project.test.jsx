import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

// Mock initialProjects if you want to isolate tests (optional)
// import { initialProjects } from "../data.js";

describe("Project Showcase App", () => {
  test("renders initial projects", () => {
    render(<App />);
    // Check if all initial projects appear (assuming initialProjects length > 0)
    const projectTitles = screen.getAllByRole("heading", { level: 3 });
    expect(projectTitles.length).toBeGreaterThan(0);
  });

  test("adds a new project", () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "New Project" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Cool new description" },
    });
    fireEvent.change(screen.getByLabelText(/image url/i), {
      target: { value: "https://via.placeholder.com/300" },
    });

    fireEvent.click(screen.getByText(/add project/i));

    // New project should appear
    expect(screen.getByText("New Project")).toBeInTheDocument();
    expect(screen.getByText("Cool new description")).toBeInTheDocument();

    // Check image rendered with correct src
    const img = screen.getByAltText("New Project");
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/300");
  });

  test("filters projects via search bar", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search projects/i);

    // Type something that will filter results
    fireEvent.change(searchInput, { target: { value: "nonexistent" } });

    // No project title should be visible if none match
    const projectTitles = screen.queryAllByRole("heading", { level: 3 });
    expect(projectTitles.length).toBe(0);

    // Clear search to get projects back
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
  });
});
