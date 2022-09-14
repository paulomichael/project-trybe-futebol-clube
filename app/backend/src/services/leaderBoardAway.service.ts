import MatchService from './match.service';
import TeamService from './team.service';
// import { ILeaderBoard } from '../interfaces/ILeaderBoard';
import { IMatch } from '../interfaces/IMatch';

const table = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
};

class LeaderBoardAwayService {
  constructor(private teamService = new TeamService(), private matchService = new MatchService()) {
  }

  static resetScore = () => {
    table.name = '';
    table.totalGames = 0;
    table.totalVictories = 0;
    table.totalDraws = 0;
    table.totalLosses = 0;
    table.totalPoints = 0;
    table.goalsFavor = 0;
    table.goalsOwn = 0;
    table.goalsBalance = 0;
    table.efficiency = 0;
  };

  static calculate = (teams: any, gameList: any[]) => {
    // console.log('===============> teams:', teams);
    // console.log('===============> teams.dataValues:', teams.dataValues);
    gameList.forEach((game: any) => {
      // console.log('===============> game.dataValues:', game.dataValues);
      if (teams.id === game.awayTeam) {
        table.totalGames += 1;
        if (game.homeTeamGoals < game.awayTeamGoals) { table.totalVictories += 1; }
        if (game.homeTeamGoals === game.awayTeamGoals) { table.totalDraws += 1; }
        if (game.homeTeamGoals > game.awayTeamGoals) { table.totalLosses += 1; }
        table.goalsFavor += game.awayTeamGoals;
        table.goalsOwn += game.homeTeamGoals;
      }
    });
    table.totalPoints = (table.totalVictories * 3) + table.totalDraws;
    table.goalsBalance = table.goalsFavor - table.goalsOwn;
    table.efficiency = Number(((table.totalPoints / (table.totalGames * 3)) * 100)
      .toFixed(2));
  };

  static sortGames = async (awayGames: IMatch[]) =>
    // console.log(awayGames);
    awayGames.sort((teamA, teamB) => {
      if (teamA.totalPoints < teamB.totalPoints) { return 1; }
      if (teamA.totalPoints > teamB.totalPoints) { return -1; }
      if (teamA.totalVictories < teamB.totalVictories) { return 1; }
      if (teamA.totalVictories > teamB.totalVictories) { return -1; }
      if (teamA.goalsBalance < teamB.goalsBalance) { return 1; }
      if (teamA.goalsBalance > teamB.goalsBalance) { return -1; }

      if (teamA.goalsFavor > teamB.goalsFavor) { return -1; }
      if (teamA.goalsFavor < teamB.goalsFavor) { return 1; }
      if (teamA.goalsOwn > teamB.goalsOwn) { return -1; }
      if (teamA.goalsOwn < teamB.goalsOwn) { return 1; }

      // 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
      // if (teamA.goalsFavor < teamB.goalsFavor) { return 1; }

      return 0;
    });

  async getLeaderBoardAway(): Promise<any> {
    const teamList = await this.teamService.getAllTeams();
    // console.log('------> teamList: ', teamList);
    // const gameList = await this.matchService.getAllMatches();
    const gameList = await this.matchService.getAllFinishedMatches();
    console.log('===========> gameList: ', gameList);
    // const awayGames: any[] = teamList.map((teams: any) => {
    const awayGames = teamList.map((teams) => {
      // console.log('-----> teams: ', teams);
      // como saber quais sao os away teams?
      LeaderBoardAwayService.resetScore();
      table.name = teams.teamName;
      LeaderBoardAwayService.calculate(teams, gameList);
      return { ...table };
    });
    // awayGames.sort((next, prev) => prev.totalPoints - next.totalPoints);
    const sortedGames = LeaderBoardAwayService.sortGames(awayGames);
    // console.log('-----> sortedGames:', sortedGames);
    return sortedGames;
  }
}

export default LeaderBoardAwayService;
