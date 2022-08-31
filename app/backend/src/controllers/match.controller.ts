import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  constructor(private matchService = new MatchService()) {
  }

  getAllMatches = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      const allMatches = await this.matchService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      next(error);
    }
  };

  createMatch = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      const matchRequest = req.body;
      const matchResponse = await this.matchService.createMatch(matchRequest);
      return res.status(201).json(matchResponse);
    } catch (error) {
      next(error);
    }
  };
}

export default MatchController;
