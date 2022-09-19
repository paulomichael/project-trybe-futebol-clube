// import { Request, Response, NextFunction } from 'express';
// import LeaderBoardService from '../services/leaderBoard.service';

// class LeaderBoardController {
//   constructor(private matchService = new LeaderBoardService()) {
//   }

//   getLeaderBoard = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
//     try {
//       // console.log('BEFORE');
//       const board = await this.matchService.getLeaderBoard();
//       // console.log('AFTER');
//       return res.status(200).json(board);
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// export default LeaderBoardController;
