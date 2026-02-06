import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import NewsletterModal from "../../../components/NewsletterModal";

afterEach(cleanup);

describe("NewsletterModal Component", () => {
  it("renders the subscription button initially", () => {
    render(<NewsletterModal />);
    const button = screen.getByText(/NEWSLETTER/i);
    expect(button).toBeTruthy();
  });

  it("opens the modal when clicking the subscribe button", async () => {
    render(<NewsletterModal />);
    const button = screen.getByText(/NEWSLETTER/i);
    fireEvent.click(button);

    const modalHeader = await screen.findByText(/STAY/i);
    expect(modalHeader).toBeTruthy();
  });

  it("shows error validation when submitting empty email", () => {
    render(<NewsletterModal />);
    const button = screen.getByText(/NEWSLETTER/i);
    fireEvent.click(button);

    const submitButton = screen.getByText(/SUBSCRIBE/i);
    fireEvent.click(submitButton);

    const input = screen.getByPlaceholderText(/ENTER EMAIL/i);
    expect(input.hasAttribute("required")).toBe(true);
  });

  it("simulates successful submission", async () => {
    render(<NewsletterModal />);

    fireEvent.click(screen.getByText(/NEWSLETTER/i));

    const input = screen.getByPlaceholderText(/ENTER EMAIL/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });

    const submitButton = screen.getByText(/SUBSCRIBE/i);
    fireEvent.click(submitButton);

    const successMessage = await screen.findByText(
      /YOU ARE IN/i,
      {},
      { timeout: 3000 },
    );
    expect(successMessage).toBeTruthy();
  });
});
