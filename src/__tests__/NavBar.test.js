import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("it is exported as a default export", () => {
    expect(() => {

     render(<NavBar />); 
    }).not.toThrow();

});
