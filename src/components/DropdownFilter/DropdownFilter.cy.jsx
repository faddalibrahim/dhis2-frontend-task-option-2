/* eslint-disable no-undef */
import DropdownFilter from "./DropdownFilter";

describe("<DropdownFilter />", () => {
  it("renders", () => {
    cy.mount(<DropdownFilter />);
  });

  it("selects all", () => {
    cy.mount(<DropdownFilter />);
    cy.get("select").select("all");
  });

  it("selects map", () => {
    cy.mount(<DropdownFilter setFilterBy={() => null} />);
    cy.get("select").select("map");
  });

  it("selects messages", () => {
    cy.mount(<DropdownFilter setFilterBy={() => null} />);
    cy.get("select").select("messages");
  });

  it("selects text", () => {
    cy.mount(<DropdownFilter setFilterBy={() => null} />);
    cy.get("select").select("text");
  });

  it("selects visualization", () => {
    cy.mount(<DropdownFilter setFilterBy={() => null} />);
    cy.get("select").select("visualization");
  });
  // it("clicking + fires a change event with the incremented value", () => {
  //   const onChangeSpy = cy.spy().as("onChangeSpy");
  //   cy.mount(<DropdownFilter />);
  //   cy.get("[data-cy=increment]").click();
  //   cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  // });
});
