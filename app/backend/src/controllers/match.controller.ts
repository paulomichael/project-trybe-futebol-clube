import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/match.service';

class TeamController {
  constructor(private teamService = new MatchService()) {
  }

  getAllMatches = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      const allMatches = await this.teamService.getAllMatches();
      return res.status(200).json(allMatches);
    } catch (error) {
      next(error);
    }
  };

  // getTeamById = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
  //   try {
  //     // const { id: teamId } = req.params;
  //     const { id: teamId } = req.params;
  //     const match = await this.teamService.getTeamById(Number(teamId));
  //     return res.status(200).json(match);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default TeamController;
