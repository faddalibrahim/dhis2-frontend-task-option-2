import Shimmer from "./Shimmer";

describe("<Shimmer />", () => {
  it("should render a single Shimmer", () => {
    cy.mount(<Shimmer />);
    cy.get('[data-type="shimmer"]').should("have.length", 1);
  });
});
