describe('test home screen of the app', () => {
    beforeEach(() => {
        cy.visit('WEB_APP_URI' || 'http://localhost:3001');
    });

    it('should not display any tasks when app running for the first time', () => {
        cy.get('[data-testid="tasks-list"]').should('exist');
        cy.get('[data-testid="tasks-list"] li').should('have.length', 0);
    });

    it('should add a new task to the list', () => {
        cy.get('[data-testid="create-task-input"]').type('First task');
        cy.get('[data-testid="create-task-button"]').click();
        cy.contains('First task').should('exist');
        cy.get('[data-testid="tasks-list"] li').should('have.length', 1);
    });

    it('should allows checking a task completed', () => {
        cy.get('[data-testid="create-task-input"]').type('First task');
        cy.get('[data-testid="create-task-button"]').click();
        cy.contains('First task').parent().find('input[type=checkbox]').click();
        cy.contains('First task').parent().find('input[type=checkbox]').should('be.checked');
    });
});
