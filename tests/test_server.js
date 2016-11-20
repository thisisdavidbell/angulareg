var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Storage = require('./../Storage');
var request = require("supertest");

describe('Testing server', function() {
  // if server already running outside test
  //var server = request.agent("http://localhost:8080");
  var server = require('./../server');

  describe('/api/todos', function() {
   describe('GET - Get all', function() {
  // order of 'it's matters as
    it("should return status 200", function(done){
      // if server already running outside test
//      server
      request(server)
      .get("/api/todos")
      .expect(200)
      .end(function(err,res){
//        console.log("res: " + JSON.stringify(res, null, 2));
//        console.log("err: " + err);

//        expect(err).to.equal(null); // if server is brought up and running, no err
        expect(res.status).to.equal(200); // HTTP status should be 200
        done();
      });
    });

    it("should be empty to start with", function(done){
      // if server already running outside test
//      server
      request(server)
      .get("/api/todos")
      .expect(200)
      .end(function(err,res){
        var parsed_body = JSON.parse(res.text);
  //      console.log(res.text);
        expect(err).to.equal(null); // if server is brought up and running, no err
        expect(parsed_body).to.be.an('object');
        expect(parsed_body).to.be.empty;
        done();
      });
    });
  }); // end GET

   describe('POST - Create Todo', function() {
  // order of 'it's matters as
    it("should return status 201", function(done){
      request(server)
      .post("/api/todos")
      .send('{"name": "thename", "text": "some text", "done": "false"}')
      .end(function(err,res){
    //    console.log(JSON.stringify(res));
        expect(res.status).to.equal(201);  // HTTP status should be 201 for POST
        done();
      }); // end .end
    }); // end it

    it("should return an object", function(done){
      request(server)
      .post("/api/todos")
      .send('{"name": "thename2", "text2": "some text2", "done": "false"}')
      .end(function(err,res){
  //      console.log(JSON.stringify(res));
        expect(res.status).to.equal(201);
        expect(res).to.be.a('object');
        done();
      }); // end .end
    }); // end it

  }); // end describe POST

 })
});
