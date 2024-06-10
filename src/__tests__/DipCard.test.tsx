import { render } from "@testing-library/react";
import { App } from "../App";

describe("Demostration to render a string value", () => {
  test("demo", () => {
    expect(true).toBe(true);
  });

  test("Renderizando la App completa", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
