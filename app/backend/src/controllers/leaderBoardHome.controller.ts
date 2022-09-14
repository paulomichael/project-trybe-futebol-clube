import { Request, Response, NextFunction } from 'express';
import LeaderBoardHomeService from '../services/leaderBoardHome.service';

class LeaderBoardHomeController {
  constructor(private matchService = new LeaderBoardHomeService()) {
  }

  getLeaderBoardHome = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      // console.log('BEFORE');
      const board = await this.matchService.getLeaderBoardHome();
      // console.log('AFTER');
      return res.status(200).json(board);
    } catch (error) {
      next(error);
    }
  };
}

export default LeaderBoardHomeController;
