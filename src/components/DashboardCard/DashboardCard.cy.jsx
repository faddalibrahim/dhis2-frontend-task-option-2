/* eslint-disable no-undef */
import DashboardCard from "./DashboardCard";

describe("Closed Dashboard", () => {
  it("renders an a closed Dashboard named Malaria", () => {
    cy.mount(
      <DashboardCard
        displayName="Malaria"
        id="malaria"
        currentExpandedCard="other"
        starredDashboards={[]}
      />
    );

    cy.get('[data-cy="caret"]').should("have.class", "");
    cy.get('[data-cy="dashboard-details"]').should("not.exist");
  });
});

describe("Expanded dashboard", () => {
  it("expands a dashboard to show its details", () => {
    cy.mount(
      <DashboardCard
        displayName="Fever"
        id="fever"
        currentExpandedCard="fever"
        starredDashboards={[]}
      />
    );

    cy.get('[data-cy="caret"]').should("have.class", "rotate-180");
    cy.get('[data-cy="dashboard-details"]').should("exist");
  });
});

describe("Starred Dashboard", () => {
  it("renders a starred Dashboard named 'Apple'", () => {
    cy.mount(
      <DashboardCard
        displayName="Apple"
        id="apple"
        currentExpandedCard=""
        filterBy="all"
        starredDashboards={["apple"]}
      />
    );
  });
});

describe("Expand Closed Dashboard", () => {
  it("expands a closed Dashboard", () => {
    const setCurrentExpandedCardStub = cy.stub().as("setCurrentExpandedCard");

    cy.mount(
      <DashboardCard
        displayName="Apple"
        id="nghVC4wtyzi"
        currentExpandedCard=""
        filterBy="all"
        starredDashboards={["nghVC4wtyzinghVC4wtyzinghVC4wtyzi"]}
        setCurrentExpandedCard={setCurrentExpandedCardStub}
      />
    );

    cy.get('[data-cy="dashboard-details"]').should("not.exist");

    cy.get('[data-cy="dashboard-card"]').click();

    cy.get("@setCurrentExpandedCard").should(
      "have.been.calledOnceWith",
      "nghVC4wtyzi"
    );
  });
});
