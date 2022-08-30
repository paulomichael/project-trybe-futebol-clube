import Team from '../database/models/team';

class TeamService {
  constructor(private teamModel = Team) {
  }

  async getAllTeams(): Promise<object> {
    const allTeams = await this.teamModel.findAll();
    return allTeams;
  }
}

export default TeamService;
