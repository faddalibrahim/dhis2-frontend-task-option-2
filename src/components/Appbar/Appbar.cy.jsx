/* eslint-disable no-undef */
import Appbar from "./Appbar";

describe("<Appbar />", () => {
  it("renders the Appbar", () => {
    cy.mount(<Appbar />);
  });
});

describe("'Dashboards' title is present", () => {
  it("should contain 'Dashboards' title", () => {
    cy.mount(<Appbar />);
    cy.get('[data-cy-type="dashboard-text"]').contains("Dashboards");
  });
});

describe("Dropdown filter exists", () => {
  it("dropdown filter should be present", () => {
    cy.mount(<Appbar />);
    cy.get("select").should("exist");
  });
});
