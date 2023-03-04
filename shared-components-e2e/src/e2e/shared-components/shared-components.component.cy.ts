describe('shared-components', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=sharedcomponentscomponent--primary')
  );
  it('should render the component', () => {
    cy.get('my-estate-webapp-shared-components').should('exist');
  });
});
