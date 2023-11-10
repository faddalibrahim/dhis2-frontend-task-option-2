import React from "react";
import ShimmerGroup from "./ShimmerGroup";

describe("<ShimmerGroup count={3}/>", () => {
  it("renders a group of 3shimmers", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShimmerGroup count={3} />);
  });
});
