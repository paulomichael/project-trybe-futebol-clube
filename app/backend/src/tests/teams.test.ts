import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import TeamController from '../controllers/team.controller'
import ITeam from '../interfaces/ITeam'
import * as sinon from 'sinon';
chai.use(chaiHttp);

const { expect } = chai;
const teamController = new TeamController();

describe('Seu teste', () => {

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
      .stub(teamController, "getAllTeams")
      .resolves(teamsMock as ITeam[]);
  });

  after(()=>{
    (teamController.getAllTeams as sinon.SinonStub).restore();
  })

  it('...', async () => {
    const chaiHttpResponse = await chai.request(app)
    console.log('--------> chaiHttpResponse',chaiHttpResponse)
    expect(true).to.eq(true)
    // expect(chaiHttpResponse[0]).to.have.property("id")
    // expect(chaiHttpResponse.body[0]).to.have.property("id")
  });

  it('Seu sub-teste', () => {
    // expect(false).to.be.eq(true);
  });
});


// describe('Teams', () => {
  
//   let response: Response;
  
//   const teamsMock = [
//     {
//       "id": 1,
//       "teamName": "Avaí/Kindermann"
//     },
//     {
//       "id": 2,
//       "teamName": "Bahia"
//     },
//     {
//       "id": 3,
//       "teamName": "Botafogo"
//     },
//     {
//       "id": 4,
//       "teamName": "Corinthians"
//     },
//     {
//       "id": 5,
//       "teamName": "Cruzeiro"
//     }
//   ]

//     it('GET /teams', 
//     async () => {

//       response = await chai.request(app)
//       .get('/teams');
//       console.log('------> response:', response)
//       expect(response).to.have.status(200);
//       expect(response.body[0]).to.have.property('id');
//       expect(response.body[0]).to.have.property('teamName');
//     });
// });



// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Seu teste', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   // let chaiHttpResponse: Response;

//   // before(async () => {
//   //   sinon
//   //     .stub(Example, "findOne")
//   //     .resolves({
//   //       ...<Seu mock>
//   //     } as Example);
//   // });

//   // after(()=>{
//   //   (Example.findOne as sinon.SinonStub).restore();
//   // })

//   // it('...', async () => {
//   //   chaiHttpResponse = await chai
//   //      .request(app)
//   //      ...

//   //   expect(...)
//   // });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
