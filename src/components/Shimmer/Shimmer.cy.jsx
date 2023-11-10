import React from "react";
import Shimmer from "./Shimmer";

describe("<Shimmer />", () => {
  it("renders a Shimmer", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Shimmer />);
  });
});
