import Team from '../database/models/team';

class TeamService {
  constructor(private teamModel = Team) {
  }

  async getAllTeams(): Promise<object> {
    const allTeams = await this.teamModel.findAll();
    return allTeams;
  }

  // async getTeamById(teamId: number): Promise<object> {
  async getTeamById(teamId: number): Promise<any> {
    const team = await this.teamModel.findByPk(teamId);
    console.log('---------> team.service.getTeamById.team: ', team);
    return team;
  }
}

export default TeamService;
