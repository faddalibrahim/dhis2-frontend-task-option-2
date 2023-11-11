/* eslint-disable no-undef */
import DropdownFilter from "./DropdownFilter";

describe("All 5 select options - all, map, messages, text, visualization - present", () => {
  it("renders dropdown filter with the expected option values", () => {
    cy.mount(<DropdownFilter />);
    cy.get("select > option")
      .should("have.length", 5)
      .should("contain", "all")
      .should("contain", "map")
      .should("contain", "messages")
      .should("contain", "text")
      .should("contain", "visualization");
  });
});

describe("Default value is 'all'", () => {
  it("renders dropdown filter with default value of 'all'", () => {
    cy.mount(<DropdownFilter />);
    cy.get("select").should("have.value", "all");
  });
});

describe("Select 'map'", () => {
  it("should select 'map' and call filterBy with 'map'", () => {
    const setFilterByStub = cy.stub().as("setFilterByStub");

    cy.mount(<DropdownFilter setFilterBy={setFilterByStub} />);

    cy.get("select").select("map");

    cy.get("@setFilterByStub").should("have.been.calledOnceWith", "map");

    cy.get("select").should("have.value", "map");
  });
});
