describe('React todo example', () => {
  it('Should add and verify todo list', () => {
  cy.visit('https://reactjs.org/');
  cy.get('#new-todo').type("My first todo item");
  cy.get('#new-todo').siblings('button').click();
  cy.get('#new-todo').type("My second todo item");
  cy.get('#new-todo').siblings('button').click();
  cy.get('div[id = "todos-example"] >div >ul > li').eq(0).should('have.text', 'My first todo item')
  cy.get('div[id = "todos-example"] >div >ul > li').eq(1).should('have.text', 'My second todo item')
  })
  }
)

describe('React calculator example', () => {
  it('Should validate addition operation', () => {
  cy.visit('https://ahfarmer.github.io/calculator/');
  cy.get('button').contains('7').click();
  cy.get('button').contains(/^\+$/).click();
  cy.get('button').contains('9').click();
  cy.get('button').contains('=').click();
  cy.get('div[class="component-display"]>div').should('have.text','16')
  })
  })