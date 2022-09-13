import { Request, Response, NextFunction } from 'express';
import LeaderBoardHomeService from '../services/leaderBoardHome.service';

class LeaderBoardHomeController {
  constructor(private matchService = new LeaderBoardHomeService()) {
  }

  getLeaderBoardHome = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
    try {
      console.log('BEFORE');
      const board = await this.matchService.getLeaderBoardHome();
      console.log('AFTER');
      return res.status(200).json(board);
    } catch (error) {
      next(error);
    }
  };

  // createMatch = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
  //   try {
  //     const matchRequest = req.body;
  //     if (matchRequest.homeTeam === matchRequest.awayTeam) {
  //       return res
  //         .status(401)
  //         .json({ message: 'It is not possible to create a match with two equal teams' });
  //     }
  //     const matchResponse: any = await this.matchService.createMatch(matchRequest);
  //     if (matchResponse.message) {
  //       return res.status(404).json({ message: matchResponse.message });
  //       // return res.status(404).json({ message: 'There is no team with such id!' });
  //     }
  //     return res.status(201).json(matchResponse);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // finishMatch = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
  //   try {
  //     const { id: matchId } = req.params;
  //     await this.matchService.finishMatch(Number(matchId));
  //     return res.status(200).json({ message: 'Finished' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // updateMatch = async (req: Request, res: Response, next: NextFunction): Promise <any> => {
  //   try {
  //     const { id: matchId } = req.params;
  //     const matchResult = req.body;
  //     await this.matchService.updateMatch(Number(matchId), matchResult);
  //     return res
  //       .status(200)
  //       .json({ message: 'Match Updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default LeaderBoardHomeController;
