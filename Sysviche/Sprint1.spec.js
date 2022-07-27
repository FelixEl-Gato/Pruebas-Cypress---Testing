'use strict'
describe('Pruebas Sprint 1', () => {
    function login() {
        if (cy.get('.btn')) {
            cy.get('#usuario').type("admin3")
            cy.get('#clave').type("admin3")
            cy.get('.btn').click()
            // cy.wait(3000);
        }
    };
    // let status = false;
    beforeEach(() => {
        cy.visit("http://localhost:8080/ADS_Cevicheria/sistema/index.php")
    })
    it('PB-SYS-2', () => {
        if (cy.get('.btn')) {
            cy.get('#usuario').type("admin")
            // cy.get('#clave').type("admin")
            cy.get('.btn').click()
            // cy.wait(1000)
            cy.contains("Usuario o Contraseña vacios").should('exist')
        }

    });
    it('PB-SYS-3', () => {
        if (cy.get('.btn')) {
            // cy.get('#usuario').type("admin")
            cy.get('#clave').type("admin")
            cy.get('.btn').click()
            // cy.wait(1000)
            cy.contains("Usuario o Contraseña vacios").should('exist')
        }

    });
    // status = true;
    it('PB-SYS-4', () => {
        cy.get('#usuario').type("admin3")
        cy.get('#clave').type("admin3")
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get(".nav > :nth-child(1) > .nav-link").should('exist')
    });
    it('PB-SYS-5', () => {
        cy.get('#usuario').type("no-user")
        cy.get('#clave').type("no-pass")
        cy.get('.btn').click()
        cy.get(".nav > :nth-child(1) > .nav-link").should('not.exist')
    });

    it('PB-SYS-6', () => {
        login()
        cy.get(".navbar-nav > .nav-item > .nav-link").click()
        cy.get('#usuario').should("exist")
    });
    // it('Inicio Login', () => {
    //     status = true;
    //     if (cy.get('#bntAceptar')) {
    //         cy.get('#login').type("LuisXVI")
    //         cy.get('#password').type("admin")
    //         cy.get('#bntAceptar').click()
    //         // cy.wait(1000)
    //         cy.contains("NO EXISTE USUARIO CON ESOS DATOS O ESTA DESHABILITADO").should('not.exist')
    //     }

    // });

})