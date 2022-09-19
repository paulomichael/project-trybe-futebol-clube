// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');
// import { app } from '../app';
// import { Response } from 'superagent';
// // import IUserLogin from '../interfaces/IUserLogin';
// // import User from '../database/models/user'
// import LeaderBoardService from '../services/leaderBoard.service';
// import * as  sinon from 'sinon';

// const leaderBoardService = new LeaderBoardService();

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Leader Board', () => {
  
//   let response: Response;

//   const leaderBoardMock = [
//     {
//       "name": "Palmeiras",
//       "totalPoints": 13,
//       "totalGames": 5,
//       "totalVictories": 4,
//       "totalDraws": 1,
//       "totalLosses": 0,
//       "goalsFavor": 17,
//       "goalsOwn": 5,
//       "goalsBalance": 12,
//       "efficiency": "86.67"
//     },
//     {
//       "name": "Corinthians",
//       "totalPoints": 12,
//       "totalGames": 5,
//       "totalVictories": 4,
//       "totalDraws": 0,
//       "totalLosses": 1,
//       "goalsFavor": 12,
//       "goalsOwn": 3,
//       "goalsBalance": 9,
//       "efficiency": "80.00"
//     }
//   ]

//   before(async () => {
//     sinon
//       // .stub(leaderBoardAwayService, "resetScore")
//       .stub(leaderBoardService, "getLeaderBoard")
//       .resolves(leaderBoardMock);
//   });

//   after(()=>{
//     (leaderBoardService.getLeaderBoard as sinon.SinonStub).restore();
//   })



//     it('GET /leaderboard', 
//     async () => {

//       response = await chai.request(app)
//       .get('/leaderboard')
//       // .send(signInMock);

//       // console.log('====> response: ', response)
//       expect(response).to.have.status(500);
//       expect(response).to.have.property('body');
//     });
// });
