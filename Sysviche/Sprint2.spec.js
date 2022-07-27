'use strict'
describe('Sprint 2', () => {
    function login(user, pass) {
        cy.visit("http://localhost:8080/ADS_Cevicheria/sistema/index.php")

        if (cy.get('.btn')) {
            cy.get('#usuario').type(user)
            cy.get('#clave').type(pass)
            cy.get('.btn').click()
            // cy.wait(3000);
        }
    };
    it('PB-SYS-8', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.contains("Disponible").should("exist")
    });
    it('PB-SYS-9', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.contains("No Disponible").should("exist")
    });
    it('PB-SYS-10', () => {
        login("admin", "admin")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get("p.text-success").contains("Disponible")

    });
    it('PB-SYS-11', () => {

        login("admin", "admin")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get(".text-danger").contains("No Disponible")
    });

    it('PB-SYS-12', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get("a.btn").should("exist")
        cy.get("input.btn").should("exist")
    });

    it('PB-SYS-13', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get("a.btn").click()
        cy.get("#numero_mesa").type("-5")
        cy.get("#capacidad").type("10")
        cy.get(".btn").click()
        cy.contains("Error al agregar la mesa -> solos valores positivos").should("exist")
    });
    it('PB-SYS-15', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get("a.btn").click()
        cy.get("#numero_mesa").type("2")
        cy.get("#capacidad").type("-10")
        cy.get(".btn").click()
        cy.contains("Error al agregar la mesa -> solos valores positivos").should("exist")

    });
    it('PB-SYS-14', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get("a.btn").click()
        cy.get("#numero_mesa").type("16")
        cy.get("#capacidad").type("8")
        cy.get(".btn").click()
        cy.contains("Mesa agregada correctamente").should("exist")


    });
    it('PB-SYS-16', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get(":nth-child(2) > :nth-child(4) > form > .btn").click()
        cy.get("#estado").click()
    });
    it('PB-SYS-17', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()
        cy.get(":nth-child(2) > :nth-child(4) > form > .btn").click()
    });
    it('PB-SYS-18', () => {
        login("admin3", "admin3")
        cy.get(":nth-child(2) > .nav-link").click()

    });


})