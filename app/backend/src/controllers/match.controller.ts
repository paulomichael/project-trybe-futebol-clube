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
      if (matchRequest.homeTeam === matchRequest.awayTeam) {
        return res
          .status(401)
          .json({ message: 'It is not possible to create a match with two equal teams' });
      }
      const matchResponse = await this.matchService.createMatch(matchRequest);
      return res.status(201).json(matchResponse);
    } catch (error) {
      next(error);
    }
  };

  finishMatch = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      const { id: matchId } = req.params;
      await this.matchService.finishMatch(Number(matchId));
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  };
}

export default MatchController;
