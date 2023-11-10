import React from "react";
import ShimmerGroup from "./ShimmerGroup";

describe("<ShimmerGroup />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShimmerGroup count={3} />);
  });
});
