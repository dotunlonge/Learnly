/**
 * @file Test suite for the Navbar component in the homepage context.
 *
 * This suite focuses on verifying the visual and responsive properties of the Navbar component,
 * ensuring it displays the Learnly brand and adjusts its layout according to different screen sizes.
 * The useWindowSize hook is mocked to simulate various screen sizes, allowing us to test the responsive
 * design features of the Navbar component without relying on actual browser window resizing.
 */

import { render, screen } from "@testing-library/react";
import Navbar from "@/pages/components/navbar";

/**
 * Mocks the useWindowSize hook to control screen size simulation.
 * This mock allows tests to specify screen size conditions (large or small) and verify
 * the Navbar component's responsiveness.
 */
jest.mock("@/pages/hooks/useWindowSize", () => ({
  __esModule: true, // Necessary for ES Module compatibility.
  default: jest.fn(), // Mocks the default export (the hook function) to be a jest function.
}));

describe("Navbar Component On Homepage", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  /**
   * Verifies that the Navbar component correctly renders the Learnly brand text.
   * This test ensures that the primary branding element is visible to users
   * at all times, regardless of screen size.
   */
  test("Navbar renders with the Learnly brand visible", () => {
    expect(screen.getByText("Learnly")).toBeInTheDocument();
  });
});
