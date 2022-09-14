import { Request, Response, NextFunction } from 'express';
import LeaderBoardAwayService from '../services/leaderBoardAway.service';

class LeaderBoardAwayController {
  constructor(private matchService = new LeaderBoardAwayService()) {
  }

  getLeaderBoardAway = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      // console.log('BEFORE');
      const board = await this.matchService.getLeaderBoardAway();
      // console.log('AFTER');
      return res.status(200).json(board);
    } catch (error) {
      next(error);
    }
  };
}

export default LeaderBoardAwayController;
