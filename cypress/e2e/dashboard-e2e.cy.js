/* eslint-disable no-undef */
describe("Load Application", () => {
  it("loads the dashboard app", () => {
    cy.visit("http://localhost:5174");
  });
});

describe("Dropdown Filter Exists With 'All' Default Value", () => {
  it("should render dropdown filter with default value of 'all'", () => {
    cy.visit("http://localhost:5174");

    cy.get("select").should("exist");

    cy.get("select > option")
      .should("have.length", 5)
      .should("contain", "all")
      .should("contain", "map")
      .should("contain", "messages")
      .should("contain", "text")
      .should("contain", "visualization");

    cy.get("select").should("have.value", "all");
  });
});

describe("Show First Dashboard Details By Default", () => {
  it("load and expand the first dashboard card and show its contents", () => {
    cy.visit("http://localhost:5174");

    cy.get('[data-cy="dashboard-details"]').should("have.length", 1);
    cy.get('[data-cy="caret"]').first().should("have.class", "rotate-180");
  });
});

describe("Filter dashboard by 'map'", () => {
  it("show only map items in first dashboard", () => {
    cy.visit("http://localhost:5174");

    cy.get('[data-cy="dropdown-filter"]').select("map");
    cy.get('[data-cy="dropdown-filter"]').should("have.value", "map");
    cy.get('[data-cy="map"]').should("have.length", 2);
  });
});

describe("Filter dashboard by 'visualization'", () => {
  it("show only visualization items in first dashboard", () => {
    cy.visit("http://localhost:5174");

    cy.get('[data-cy="dropdown-filter"]').select("visualization");
    cy.get('[data-cy="dropdown-filter"]').should("have.value", "visualization");
    cy.get('[data-cy="visualization"]').should("have.length", 8);
  });
});

describe("Star First Dashboard and Persist Starred State on Reload", () => {
  it("star first dashboard card and persists starred state on reload", () => {
    cy.visit("http://localhost:5174");
    cy.clearLocalStorage("starredDashboards");

    cy.get('[data-cy="star-icon"]').first().click();
    cy.get('[data-cy="star-icon"]').first().should("have.class", "starred");
    cy.reload(true);
    cy.get('[data-cy="star-icon"]').first().should("have.class", "starred");
  });
});

describe("Expand Second Dashboard", () => {
  it("close first dashboard and expands second dashboard", () => {
    cy.visit("http://localhost:5174");

    cy.get('[data-cy="dashboard-card"]').eq(1).click();

    cy.get('[data-cy="caret"]').first().should("not.have.class", "rotate-180");
    cy.get('[data-cy="caret"]').eq(1).should("have.class", "rotate-180");
    cy.get('[data-cy="dashboard-details"]').should("have.length", 1);
  });
});
