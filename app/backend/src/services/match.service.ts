import Match from '../database/models/match';
import TeamModel from '../database/models/team';

class TeamService {
  constructor(private matchModel = Match) {
  }

  async getAllMatches(): Promise<object> {
    const allMatches = await this.matchModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    console.log('--------> match.service.getAllMatches().allMatches: ', allMatches);
    return allMatches;
  }

  // async getTeamById(teamId: number): Promise<object> {
  // async getTeamById(teamId: number): Promise<any> {
  //   const team = await this.matchModel.findByPk(teamId);
  //   console.log('---------> team.service.getTeamById.team: ', team);
  //   return team;
  // }
}

export default TeamService;
