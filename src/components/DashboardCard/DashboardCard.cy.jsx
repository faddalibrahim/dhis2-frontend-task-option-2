import DashboardCard from "./DashboardCard";
import React, { useState } from "react";

describe("<DashboardCard />", () => {
  it("renders an a closed Dashboard", () => {
    cy.mount(
      <DashboardCard
        displayName="Malaria"
        id="malaria"
        currentExpandedCard="other"
      />
    );
  });
});

describe("<DashboardCard />", () => {
  it("renders an opened Dashboard", () => {
    cy.mount(
      <DashboardCard
        displayName="Fever"
        id="fever"
        currentExpandedCard="fever"
      />
    );
  });
});

describe("<DashboardCard />", () => {
  it("renders a starred Dashboard", () => {
    cy.mount(
      <DashboardCard
        displayName="Fever"
        id="fever"
        currentExpandedCard="fever"
        index={0}
        filterBy="all"
      />
    );
  });
});

// describe("<DashboardCard />", () => {
//   it("renders an empty DashboardCard", () => {
//     cy.mount(<DashboardCard />);
//   });
// });

// describe("<DashboardCard displayName='Polio' currentExpandedCard='Polio' id='Polio'/>", () => {
//   it("renders an opened DashboardCard with a display name", () => {
//     cy.mount(
//       <DashboardCard
//         displayName="Polio"
//         currentExpandedCard="Polio"
//         id="Polio"
//         index={0}
//       />
//     );
//   });
// });
