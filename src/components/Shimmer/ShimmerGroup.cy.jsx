/* eslint-disable no-undef */
import ShimmerGroup from "./ShimmerGroup";

describe("<ShimmerGroup count={3}/>", () => {
  it("should render 3 shimmers", () => {
    const shimmerCount = 3;
    cy.mount(<ShimmerGroup count={shimmerCount} />);
    cy.get('[data-type="shimmer"]').should("have.length", shimmerCount);
  });
});

describe("<ShimmerGroup count={0}/>", () => {
  it("should render no shimmers", () => {
    const shimmerCount = 0;
    cy.mount(<ShimmerGroup count={shimmerCount} />);
    cy.get('[data-type="shimmer"]').should("have.length", shimmerCount);
  });
});
