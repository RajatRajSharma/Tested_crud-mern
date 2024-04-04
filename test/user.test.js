const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app').app;
const expect = chai.expect;

chai.use(chaiHttp);

// Valid ObjectIds
const validUserIdToUpdate = "660da0ac2e1bff8172d70add";
const validUserIdToDelete = "660dab6c8fce45761a1f9cfd";

describe('User CRUD Operations', () => {
  
  // Test case for getting all users
  it('Should get all users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Test case for creating a user
  it('Should create a new user', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        srno: 17,
        username: 'testuser_3',
        email: '3rd_test_user@example.com',
        password: 'test_3_password'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // Test case for updating a user
  it('Should update an existing user', (done) => {
    chai.request(app)
      .put('/users/660da0ac2e1bff8172d70add') // Replace <valid_user_id> with an actual user ID
      .send({
        username: 'updated_user'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal('updated_user');
        done();
      });
  });

  // Test case for deleting a user
  it('Should delete an existing user', (done) => {
    chai.request(app)
      .delete('/users/660dab6c8fce45761a1f9cfd') // Replace <valid_user_id> with an actual user ID
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

});