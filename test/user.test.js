import chai from 'chai';
import chaiHttp from 'chai-http';
import { app, server } from '../app.js';
const { expect } = chai;

chai.use(chaiHttp);

// Valid ObjectIds
const validUserIdToUpdate = "660e3c0a6d1599142570bb85";
const validUserIdToDelete = "660e400aa9bfcbcfb214254f";

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
        srno: 21,
        username: 'Add_USER_test',
        email: 'Add_user_test@example.com',
        password: 'Created_password'
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
      .put(`/users/${validUserIdToUpdate}`)
      .send({
        username: 'Updated_USER',
        email: 'Updated_USER@example.com',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal('Updated_USER');
        expect(res.body.email).to.equal('Updated_USER@example.com');
        done();
      });
  });

  // Test case for deleting a user
  it('Should delete an existing user', (done) => {
    chai.request(app)
      .delete(`/users/${validUserIdToDelete}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

});
