/* eslint-disable no-undef */
describe("Filter Antenatcal Care by 'map'", () => {
  it("shows map items in the dropdown", () => {
    cy.visit("http://localhost:5173");
    cy.get("#dropdown-filter").select("map");
  });
});

describe("Filter Cases Malaria Care by 'map'", () => {
  it("shows map items in the dropdown", () => {
    cy.visit("http://localhost:5173");
    cy.get("#dropdown-filter").select("map");
    cy.contains("Cases Malaria").click();
  });
});

describe("Filter Delivery by 'map'", () => {
  it("shows map items in the dropdown", () => {
    cy.visit("http://localhost:5173");
    cy.get("#dropdown-filter").select("map");
    cy.contains("Delivery").click();
  });
});

describe("Filter Disease Surveillance by 'map'", () => {
  it("shows map items in the dropdown", () => {
    cy.visit("http://localhost:5173");
    cy.get("#dropdown-filter").select("map");
    cy.contains("Disease Surveillance").click();
  });
});

describe("Filter Immunization by 'map'", () => {
  it("shows map items in the dropdown", () => {
    cy.visit("http://localhost:5173");
    cy.get("#dropdown-filter").select("map");
    cy.contains("Immunization").click();
  });
});
