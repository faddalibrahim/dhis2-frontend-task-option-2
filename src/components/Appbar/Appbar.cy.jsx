import Appbar from "./Appbar";

describe("<Appbar />", () => {
  it("renders the Appbar", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Appbar />);
  });
});
