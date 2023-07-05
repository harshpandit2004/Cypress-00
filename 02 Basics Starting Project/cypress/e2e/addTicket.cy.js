describe("addTicket", () => {
  it("load", () => {
    cy.visit("http://127.0.0.1:5173/");
  });
  it("add different category tickets", () => {
    cy.visit("http://127.0.0.1:5173/");

    //adding tasks

    cy.contains("Add Task").click();
    cy.get("#title").type("Low Ticket");
    cy.get("#summary").type("This is a low category ticket");
    cy.get("#category").select("low");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("moderate Ticket");
    cy.get("#summary").type("This is a moderate category ticket");
    cy.get("#category").select("moderate");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("important Ticket");
    cy.get("#summary").type("This is a important category ticket");
    cy.get("#category").select("important");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("urgent Ticket");
    cy.get("#summary").type("This is a urgent category ticket");
    cy.get("#category").select("urgent");
    cy.get(".modal").contains("Add Task").click();

    //checking if tasks are added

    cy.get(".task").should("have.length", 4);
    cy.get(".task h2").contains("Low Ticket");
    cy.get(".task h2").contains("moderate Ticket");
    cy.get(".task h2").contains("important Ticket");
    cy.get(".task h2").contains("urgent Ticket");

    //modal and backdrop should be hidden
    cy.get(".modal").should("not.exist");
    cy.get(".backdrop").should("not.exist");
  });

  it("should validate user input", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("Low Ticket");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".error-message").should("exist");

    cy.get("#title").clear();
    cy.get("#summary").type("This is a low category ticket");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".error-message").should("exist");

    cy.get("#title").type("Low Ticket");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".error-message").should("not.exist");
  });

  it("should test different categories", () => {
    cy.visit("http://127.0.0.1:5173/");

    //adding tasks

    cy.contains("Add Task").click();
    cy.get("#title").type("Low Ticket");
    cy.get("#summary").type("This is a low category ticket");
    cy.get("#category").select("low");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("moderate Ticket");
    cy.get("#summary").type("This is a moderate category ticket");
    cy.get("#category").select("moderate");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("important Ticket");
    cy.get("#summary").type("This is a important category ticket");
    cy.get("#category").select("important");
    cy.get(".modal").contains("Add Task").click();

    cy.contains("Add Task").click();
    cy.get("#title").type("urgent Ticket");
    cy.get("#summary").type("This is a urgent category ticket");
    cy.get("#category").select("urgent");
    cy.get(".modal").contains("Add Task").click();

    //checking if filtering feature works

    cy.get("#filter").select("urgent");
    cy.get(".task-list .task").contains("🚨");

    cy.get("#filter").select("important");
    cy.get(".task-list .task").contains("🔴");

    cy.get("#filter").select("moderate");
    cy.get(".task-list .task").contains("🔵");

    cy.get("#filter").select("low");
    cy.get(".task-list .task").contains("🟢");

    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 4);
    cy.get(".task h2").contains("Low Ticket");
    cy.get(".task h2").contains("moderate Ticket");
    cy.get(".task h2").contains("important Ticket");
    cy.get(".task h2").contains("urgent Ticket");

    //testing individual element
    cy.get(".task").should('have.length', 4);
    cy.get('.task h2').eq(0).contains("Low Ticket")
    cy.get('.task h2').eq(1).contains('moderate Ticket')
    cy.get('.task h2').eq(2).contains('important Ticket')
    cy.get('.task h2').eq(3).contains('urgent Ticket')
  });
});
