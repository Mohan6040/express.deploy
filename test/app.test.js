/*
--------mocha chai-------------------
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Update the path according to your file structure
chai.use(chaiHttp);
const expect = chai.expect; // which exptect the output that we defined the index.js
describe('GET /', () => {
    it('should return a welcome message', (done) => {
        chai.request(app).get('/').end((err, res) => {
            expect(res).to.have.status(200) // receive the data
            expect(res.body).to.be.an('object') // object in the body
            expect(res.body.message).to.equal('Hello, World!');
        done();
        })
    })
})
*/
/*
-----------------supertest-------------------------------
const request = require('supertest');
const app = require('../index'); // Assuming your app file is in the same directory
describe('GET /', () => {
    it('responsed with json', (done) => {
        request(app)
        .get('/')
        .set('Accept', 'application/json') // data should be accept inthe JSON format
        .expect('Content-Type', /json/)
        .expect(200) // status code
        .end((err, res) => {
            if (err) return done (err)
            done();
        })
    })
})

*/

/*
-------------------test cases for routes and middleware-----------------------------------------------------

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Make sure to provide the correct path to your Express app file
const expect = chai.expect;
chai.use(chaiHttp);
describe('Express App', () => {
  // Test middleware
  it('should execute middleware', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
  // Test / route
  it('should return "Hello, World!" for / route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
  // Test /api/data route
  it('should return JSON data for /api/data route', (done) => {
    chai.request(app)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('API data response');
        done();
      });
  });
});

*/


const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Make sure to provide the correct path to your Express app file
const expect = chai.expect;
chai.use(chaiHttp);
describe('Express App', () => {
  // Test middleware
  it('should execute middleware', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
  // Test / route
  it('should return "Hello, World!" for / route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
  // Test /api/data route
  it('should return JSON data for /api/data route', (done) => {
    chai.request(app)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('API data response');
        done();
      });
  });
});

