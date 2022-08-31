import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users e Login', () => {
  
  let response: Response;

  const signInMock = {
    email: 'user@user.com',
    password: 'secret_user'
  }

    it('POST /login', 
    async () => {

      response = await chai.request(app)
      .post('/login')
      .send(signInMock);

      expect(response).to.have.status(200);
      expect(response.body).to.have.property('token');
    });
});
