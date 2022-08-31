import MatchModel from '../database/models/match';
import TeamModel from '../database/models/team';

class MatchService {
  constructor(private matchModel = MatchModel) {
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

  async createMatch(matchRequest: object): Promise<object> {
    const matchResponse = await this.matchModel.create({
      ...matchRequest,
      inProgress: true,
    });
    console.log('--------> match.service.getAllMatches().matchRequest: ', matchRequest);
    // console.log('--------> match.service.getAllMatches().matchResponse: ', matchResponse);
    return matchResponse;
  }

  async finishMatch(matchId: number): Promise<void> {
    await this.matchModel.update({ inProgress: false }, { where: { id: matchId } });
  }

  // async getTeamById(teamId: number): Promise<object> {
  // async getTeamById(teamId: number): Promise<any> {
  //   const team = await this.matchModel.findByPk(teamId);
  //   console.log('---------> team.service.getTeamById.team: ', team);
  //   return team;
  // }
}

export default MatchService;
