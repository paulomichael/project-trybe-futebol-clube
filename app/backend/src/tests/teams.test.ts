
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import Team from '../database/models/team'
import ITeam from '../interfaces/ITeam'
import * as  sinon from 'sinon';


chai.use(chaiHttp);

const { expect } = chai;

describe('gets all teams', () => {
  
  let response: Response;

     const teamsMock = [
        {
          "id": 1,
          "teamName": "Avaí/Kindermann"
        },
        {
          "id": 2,
          "teamName": "Bahia"
        },
        {
          "id": 3,
          "teamName": "Botafogo"
        }
      ]

  before(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(teamsMock as []);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })



    it('get all teams', 
    async () => {

      response = await chai.request(app)
      .get('/teams')
      console.log('-------> response:', response)
      expect(response).to.have.status(200);
      expect(response.body[0]).to.have.property('id');
    });
});

describe('get teams by id', () => {
  
  let response: Response;


  const teamMock = {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  }


  before(async () => {
    sinon
      .stub(Team, "findByPk")
      .resolves(teamMock as any);
  });

  after(()=>{
    (Team.findByPk as sinon.SinonStub).restore();
  })



    it('gets teams by id', 
    async () => {

      response = await chai.request(app)
      .get('/teams/1')
      console.log('-------> response:', response)
      expect(response).to.have.status(200);
      expect(response.body[0]).to.have.property('id');
    });
});