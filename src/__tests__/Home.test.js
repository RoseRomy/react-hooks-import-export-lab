import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("it is exported as a default export", () => {

    expect(() => render(<Home />)).not.toThrow();
});
