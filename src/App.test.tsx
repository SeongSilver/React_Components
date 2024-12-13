import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

test("App", async () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Vite + React"
  );

  expect(
    screen.getByRole("button", { name: "카운트는 0 입니다." })
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole("button"));

  expect(
    await screen.findByRole("button", { name: "카운트는 1 입니다." })
  ).toBeInTheDocument();
});
