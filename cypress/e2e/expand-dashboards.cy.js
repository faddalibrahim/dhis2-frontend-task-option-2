/* eslint-disable no-undef */
describe("Expand Cases Malaria Dashboard", () => {
  it("expands Cases Malaria card", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Cases Malaria").click();
  });
});

describe("Expand Delivery Dashboard", () => {
  it("expands Delivery card", () => {
    cy.visit("http://localhost:5173");
    // cy.get(".dashboard-card").first().click();
    cy.contains("Delivery").click();
  });
});

describe("Expand Disease Surveillance Dashboard", () => {
  it("expands Disease Surveillance card", () => {
    cy.visit("http://localhost:5173");
    // cy.get(".dashboard-card").first().click();
    cy.contains("Disease Surveillance").click();
  });
});

describe("Expand Immunization Dashboard", () => {
  it("expands Immunization card", () => {
    cy.visit("http://localhost:5173");
    // cy.get(".dashboard-card").first().click();
    cy.contains("Immunization").click();
  });
});
