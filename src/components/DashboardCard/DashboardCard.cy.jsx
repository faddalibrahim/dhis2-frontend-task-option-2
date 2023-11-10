import DashboardCard from "./DashboardCard";
import React, { useState } from "react";

describe("<DashboardCard />", () => {
  it("renders an empty DashboardCard", () => {
    cy.mount(<DashboardCard />);
  });

  it("renders a DashboardCard with a display name", () => {
    cy.mount(<DashboardCard displayName="Malaria" />);
  });

  it("renders a a closed DashboardCard with a display name", () => {
    cy.mount(
      <DashboardCard
        displayName="Polio"
        currentExpandedCard=""
        id="Polio"
        index={0}
      />
    );
  });
});

describe("<DashboardCard displayName='Polio' currentExpandedCard='Polio' id='Polio'/>", () => {
  it("renders an opened DashboardCard with a display name", () => {
    cy.mount(
      <DashboardCard
        displayName="Polio"
        currentExpandedCard="Polio"
        id="Polio"
        index={0}
      />
    );
  });
});
