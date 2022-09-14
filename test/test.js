// Import the dependencies for testing
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Contact = require("../contactModel.js");

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../index.js");
let should = chai.should();

chai.use(chaiHttp);
chai.should();

describe("Contacts", () => {
  beforeEach((done) => {
    Contact.remove({}, (err) => {
      done();
    });
  });

  // Test the /contacts POST route
  describe("POST /api/contacts", () => {
    it("it should POST a new contact", (done) => {
      let contactDetails = {
        name: "Tester 1",
        gender: "Male",
        email: "tester1@tester1.com",
        phone: 90909090,
      };
      chai
        .request(app)
        .post("/api/contacts")
        .send(contactDetails)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("New contact created!");
          res.body.should.have.property("data");
          res.body.should.have.property("data").property("_id");
          res.body.should.have.property("data").property("name");
          res.body.should.have.property("data").property("gender");
          res.body.should.have.property("data").property("email");
          res.body.should.have.property("data").property("phone");
          done();
        });
    });
  });

  // Test the /api/contacts/:contact_id GET route
  describe("GET /api/contacts/:contact_id", () => {
    it("it should GET a contact by the given id", (done) => {
      const contact = new Contact({
        name: "Tester2",
        email: "Tester2@Tester2",
        gender: "Male",
        phone: 90909019,
      });
      contact.save((err, contact) => {
        chai
          .request(app)
          .get("/api/contacts/" + contact.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("data").property("_id");
            res.body.should.have.property("data").property("name");
            res.body.should.have.property("data").property("gender");
            res.body.should.have.property("data").property("email");
            res.body.should.have.property("data").property("phone");
            res.body.should.have
              .property("data")
              .property("_id")
              .eql(contact.id);
            done();
          });
      });
    });
  });

  // Test the /api/contacts/:contact_id PUT route
  describe("PUT /api/contacts/:id", () => {
    it("it should UPDATE a contact given the id", (done) => {
      const contact = new Contact({
        name: "Tester5",
        email: "Tester5@Tester5",
        gender: "Male",
        phone: 90909012,
      });
      contact.save((err, contact) => {
        chai
          .request(app)
          .del("/api/contacts/" + contact.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("message").eql("Contact deleted");
            done();
          });
      });
    });
  });

  // Test the /api/contacts/:contact_id DELETE route
  describe("DELETE /api/contacts/:id", () => {
    it("it should DELETE a contact given the id", (done) => {
      const contact = new Contact({
        name: "Tester3",
        email: "Tester3@Tester3",
        gender: "Male",
        phone: 90909012,
      });
      contact.save((err, contact) => {
        chai
          .request(app)
          .put("/api/contacts/" + contact.id)
          .send({
            email: "Tester4@Tester4",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("Contact Info updated");
            res.body.should.have
              .property("data")
              .property("email")
              .eql("Tester4@Tester4");
            done();
          });
      });
    });
  });
});
