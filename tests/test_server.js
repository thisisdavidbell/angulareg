var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

var Storage = require('./../Storage');

var request = require("supertest");



// This agent refers to PORT where program is runninng.

// var server = supertest.agent("http://localhost:8080");


describe('Testing server', function() {
  var server = require('./../server');
  describe('/api/todos', function() {

    it("should return status 200",function(done){

      request(server)
      .get("/api/todos")
      .end(function(err,res){
        console.log("res: " + JSON.stringify(res, null, 2));
        console.log("err: " + err);
        expect(err).to.equal(null);
        // HTTP status should be 200
        expect(res.status).to.equal(200);
        // Error key should be false.

        done();
      });

    });
  });
});
