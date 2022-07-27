'use strict'
describe('Pruebas Retenciones Letras', () => {
    function login() {
        if (cy.get('.btn')) {
            cy.get('#usuario').type("admin3")
            cy.get('#clave').type("admin3")
            cy.get('.btn').click()
            // cy.wait(3000);
        }
    };
    let status = false;
    beforeEach(() => {
        cy.visit("http://localhost:8080/ADS_Cevicheria/sistema/index.php")

        login()

    })
    it('Inicio Login', () => {
        if (cy.get('#bntAceptar')) {
            cy.get('#login').type("LuisXVaI")
            cy.get('#password').type("admin")
            cy.get('#bntAceptar').click()
            // cy.wait(1000)
            cy.contains("NO EXISTE USUARIO CON ESOS DATOS O ESTA DESHABILITADO").should('not.exist')
        }

    });
    it('Inicio Login', () => {
        status = true;
        if (cy.get('#bntAceptar')) {
            cy.get('#login').type("LuisXVI")
            cy.get('#password').type("admin")
            cy.get('#bntAceptar').click()
            // cy.wait(1000)
            cy.contains("NO EXISTE USUARIO CON ESOS DATOS O ESTA DESHABILITADO").should('not.exist')
        }

    });
    // it('Prueba Administrar Productos', () => {
    //     cy.wait(1000)
    //     cy.contains('Administrar Productos').click()
    //     cy.wait(1000)
    //     cy.get(':nth-child(1) > :nth-child(6) > .btn-primary').click()
    //     cy.wait(1000)
    //     cy.get('[name="txtnombre"]').clear()
    //     cy.get('[name="txtnombre"]').type("prueba cypress")
    //     cy.get('[name="txtprecio"]').clear()
    //     cy.get('[name="txtprecio"]').type("50")
    //     cy.get('[name="txtstock"]').clear()
    //     cy.get('[name="txtstock"]').type("200")
    //     cy.get('[name="txtdescripcion"]').clear()
    //     cy.get('[name="txtdescripcion"]').type("producto prueba cypress")
    //     cy.get('.btn-primary').click()

    // });

})