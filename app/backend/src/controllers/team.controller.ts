import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/team.service';

class TeamController {
  constructor(private teamService = new TeamService()) {
  }

  getAllTeams = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      const allTeams = await this.teamService.getAllTeams();
      return res.status(200).json(allTeams);
    } catch (error) {
      next(error);
    }
  };

  getTeamById = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      // const { id: teamId } = req.params;
      const { id: teamId } = req.params;
      const team = await this.teamService.getTeamById(Number(teamId));
      return res.status(200).json(team);
    } catch (error) {
      next(error);
    }
  };
}

export default TeamController;
