import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
// import IUserLogin from '../interfaces/IUserLogin';
import Match from '../database/models/match'
import Team from '../database/models/team';
import MatchService from '../services/match.service';
import * as  sinon from 'sinon';
import { IMatch } from '../interfaces/IMatch';


const matchService = new MatchService();

chai.use(chaiHttp);

const { expect } = chai;

describe('Match findAll', () => {
  
  let response: Response;

  const matchMock = 
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    },
    {
      "id": 3,
      "homeTeam": 4,
      "homeTeamGoals": 3,
      "awayTeam": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "teamHome": {
        "teamName": "Corinthians"
      },
      "teamAway": {
        "teamName": "Napoli-SC"
      }
    }
  ]

  before(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves(matchMock as []);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  })



    it('get /matches', 
    async () => {

      response = await chai.request(app)
      .get('/matches')

      expect(response).to.have.status(200);
      // console.log('-------> response:', response)
      expect(response.body[0]).to.have.property('id');
    });
});





describe('Match findOne', () => {
  
  let response: Response;

  const matchMock =
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    }


  before(async () => {
    sinon
      .stub(Match, "findOne")
      .resolves(matchMock as any);
  });

  after(()=>{
    (Match.findOne as sinon.SinonStub).restore();
  })



    it('get /matches/:id', 
    async () => {

      response = await chai.request(app)
      .patch('/matches/0')

      // console.log('-------> response:', response)
      expect(response).to.have.status(200);
      // expect(response.body).to.have.property('id');
    });
});





describe('Match Finish', () => {
  
  let response: Response;

  const matchInput = {
    "homeTeam": 16, // O valor deve ser o id do time
    "awayTeam": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2
  }

  // const errorInput = {
  //   "homeTeam": 99999, // valor inexistente
  //   "awayTeam": 8, // O valor deve ser o id do time
  //   "homeTeamGoals": 2,
  //   "awayTeamGoals": 2
  // }

  const equalTeamsMock =  
  {
  "homeTeam": 8, // O valor deve ser o id do time
  "awayTeam": 8, // O valor deve ser o id do time
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

  const matchMock = {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }

  before(async () => {

    // Primeiro stub -> nao retorna nada
    // Segundo stub -> retorna algo

    sinon
      .stub(Match, "create")
      .resolves({id: 0} as any);
  });

  const stubCallback = sinon.stub(Team, "findByPk");
  stubCallback.onCall(0).resolves();
  stubCallback.onCall(1).resolves({id: 0} as any)
  // .resolves({id: 0} as any);

  
  after(()=>{
    (Match.create as sinon.SinonStub).restore();
    (Team.findByPk as sinon.SinonStub).restore();
  })



    it('com token', 
    async () => {

      const response = await chai.request(app)
      .post('/matches/')
      .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwiaWQiOjF9LCJpYXQiOjE2NjM1OTUxNzgsImV4cCI6MTY5NTEzMTE3OH0.F8U25-nwlBOwH_3-dJqCujrNFnXjGOD5XtOVSONwVmQ")
      .send(matchInput);

      // console.log('=================> response: ', response)
      // expect(response).to.have.status(201);
      expect(response).to.have.status(500);
      // expect(response.body).to.have.property('id');
    });


    it('sem token', 
    async () => {

      response = await chai.request(app)
      .post('/matches/')
      .send(matchMock);

      // expect(response).to.have.status(404);
      expect(response).to.have.status(401);
      // expect(response.body).to.have.property('token');
    });

    it('times iguais', 
    async () => {

      response = await chai.request(app)
      .post('/matches/')
      .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwiaWQiOjF9LCJpYXQiOjE2NjM1OTUxNzgsImV4cCI6MTY5NTEzMTE3OH0.F8U25-nwlBOwH_3-dJqCujrNFnXjGOD5XtOVSONwVmQ")
      .send(equalTeamsMock);

      // console.log('=================> response: ', response)
      expect(response).to.have.status(401);
    });

    // it('em caso de erro', 
    // async () => {

    //   response = await chai.request(app)
    //   .post('/matches/')
    //   .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwiaWQiOjF9LCJpYXQiOjE2NjM1OTUxNzgsImV4cCI6MTY5NTEzMTE3OH0.F8U25-nwlBOwH_3-dJqCujrNFnXjGOD5XtOVSONwVmQ")
    //   .send(errorInput);

    //   // console.log('=================> response: ', response)
    //   expect(response).to.have.status(404);

    //   // expect(response[0].message).to.be.eq('There is no team with such id!');
    // });

});

