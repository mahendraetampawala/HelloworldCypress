///<reference types="cypress"/>

it('Google Search',function(){

    cy.visit('https://google.com')
//Both of those ways can be use to click on 
    cy.get('.gLFyf').type('Automation using cypress{Enter}')
    //cy.contains('Google Search').click()

    cy.contains('videos').click()
})
