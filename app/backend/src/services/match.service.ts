import MatchModel from '../database/models/match';
import TeamModel from '../database/models/team';

class MatchService {
  constructor(private matchModel = MatchModel) {
  }

  async getAllMatches(): Promise<MatchModel[]> {
    const allMatches = await this.matchModel.findAll({
      // adicionar inProgress pra filtrar
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    // console.log('--------> match.service.getAllMatches().allMatches: ', allMatches);
    return allMatches;
  }

  async getAllFinishedMatches(): Promise<MatchModel[]> {
    const allFinishedMatches = await this.matchModel.findAll({
      where: { inProgress: false },
    });
    return allFinishedMatches as MatchModel[];
  }

  // async createMatch(matchRequest: object | any): Promise<object> {
  async createMatch(matchRequest: any): Promise<object> {
    // verifica se nomes existem
    const { homeTeam, awayTeam } = matchRequest;
    // console.log('-----> matchRequest: ', matchRequest);
    const homeTeamExist = await this.matchModel.findOne({
      where: { id: homeTeam },
    });
    const awayTeamExist = await this.matchModel.findOne({
      where: { id: awayTeam },
    });

    if (!homeTeamExist || !awayTeamExist) {
      return { message: 'There is no team with such id!' };
    }

    const matchResponse = await this.matchModel.create({
      ...matchRequest,
      inProgress: true,
    });
    return matchResponse;
  }

  async finishMatch(matchId: number): Promise<void> {
    await this.matchModel.update({ inProgress: false }, { where: { id: matchId } });
  }

  async updateMatch(matchId: number, matchResult: any): Promise<void> {
    await this.matchModel.update({
      homeTeamGoals: matchResult.homeTeamGoals,
      awayTeamGoals: matchResult.awayTeamGoals,
    }, { where: { id: matchId } });
  }
}

export default MatchService;
