/* eslint-disable no-undef */
import Appbar from "./Appbar";

describe("<Appbar />", () => {
  it("renders the Appbar", () => {
    cy.mount(<Appbar />);
  });
});

describe("<Appbar />", () => {
  it("should contain 'Dashboards' heading text", () => {
    cy.mount(<Appbar />);
    cy.get('[data-cy-type="dashboard-text"]').contains("Dashboards");
  });
});

describe("<Appbar />", () => {
  it("dropdown filter should be present", () => {
    cy.mount(<Appbar />);
    cy.get("select").should("exist");
  });
});
