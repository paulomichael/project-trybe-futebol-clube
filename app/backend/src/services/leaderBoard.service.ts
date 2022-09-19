// import MatchService from './match.service';
// import TeamService from './team.service';
// // import { ILeaderBoard } from '../interfaces/ILeaderBoard';
// import { IMatch } from '../interfaces/IMatch';

// const homeTeamTable = {
//   name: '',
//   totalPoints: 0,
//   totalGames: 0,
//   totalVictories: 0,
//   totalDraws: 0,
//   totalLosses: 0,
//   goalsFavor: 0,
//   goalsOwn: 0,
//   goalsBalance: 0,
//   efficiency: 0,
// };

// const awayTeamTable = {
//   name: '',
//   totalPoints: 0,
//   totalGames: 0,
//   totalVictories: 0,
//   totalDraws: 0,
//   totalLosses: 0,
//   goalsFavor: 0,
//   goalsOwn: 0,
//   goalsBalance: 0,
//   efficiency: 0,
// };

// class LeaderBoardService {
//   constructor(private teamService = new TeamService(), private matchService = new MatchService()) {
//   }

//   static resetHomeTeamScore = () => {
//     homeTeamTable.name = '';
//     homeTeamTable.totalGames = 0;
//     homeTeamTable.totalVictories = 0;
//     homeTeamTable.totalDraws = 0;
//     homeTeamTable.totalLosses = 0;
//     homeTeamTable.totalPoints = 0;
//     homeTeamTable.goalsFavor = 0;
//     homeTeamTable.goalsOwn = 0;
//     homeTeamTable.goalsBalance = 0;
//     homeTeamTable.efficiency = 0;
//   };

//   static resetAwayTeamScore = () => {
//     awayTeamTable.name = '';
//     awayTeamTable.totalGames = 0;
//     awayTeamTable.totalVictories = 0;
//     awayTeamTable.totalDraws = 0;
//     awayTeamTable.totalLosses = 0;
//     awayTeamTable.totalPoints = 0;
//     awayTeamTable.goalsFavor = 0;
//     awayTeamTable.goalsOwn = 0;
//     awayTeamTable.goalsBalance = 0;
//     awayTeamTable.efficiency = 0;
//   };

//   static gameListCallBack = (game: any) => {
//     if (game.inProgress === true) return;
//     homeTeamTable.totalGames += 1; awayTeamTable.totalGames += 1;
//     if (game.homeTeamGoals > game.awayTeamGoals) {
//       homeTeamTable.totalVictories += 1;
//       awayTeamTable.totalLosses += 1;
//     }
//     if (game.homeTeamGoals === game.awayTeamGoals) {
//       homeTeamTable.totalDraws += 1;
//       awayTeamTable.totalDraws += 1;
//     }
//     if (game.homeTeamGoals < game.awayTeamGoals) {
//       homeTeamTable.totalLosses += 1;
//       awayTeamTable.totalVictories += 1;
//     }
//     homeTeamTable.goalsFavor += game.homeTeamGoals;
//     awayTeamTable.goalsFavor += game.awayTeamGoals;
//     homeTeamTable.goalsOwn += game.awayTeamGoals;
//     awayTeamTable.goalsOwn += game.homeTeamGoals;
//   };

//   static calculate = (teams: any, gameList: any[]) => {
//     gameList.forEach(LeaderBoardService.gameListCallBack);
//     homeTeamTable.totalPoints = (homeTeamTable.totalVictories * 3) + homeTeamTable.totalDraws;
//     awayTeamTable.totalPoints = (awayTeamTable.totalVictories * 3) + awayTeamTable.totalDraws;
//     homeTeamTable.goalsBalance = homeTeamTable.goalsFavor - homeTeamTable.goalsOwn;
//     awayTeamTable.goalsBalance = awayTeamTable.goalsFavor - awayTeamTable.goalsOwn;
//     homeTeamTable.efficiency = Number(((homeTeamTable.totalPoints
//       / (homeTeamTable.totalGames * 3)) * 100).toFixed(2));
//     awayTeamTable.efficiency = Number(((awayTeamTable.totalPoints
//       / (awayTeamTable.totalGames * 3)) * 100).toFixed(2));
//   };

//   static sortGames = async (games: IMatch[]) =>
//     // console.log(games);
//     games.sort((teamA, teamB) => {
//       if (teamA.totalPoints < teamB.totalPoints) { return 1; }
//       if (teamA.totalPoints > teamB.totalPoints) { return -1; }
//       if (teamA.totalVictories < teamB.totalVictories) { return 1; }
//       if (teamA.totalVictories > teamB.totalVictories) { return -1; }
//       if (teamA.goalsBalance < teamB.goalsBalance) { return 1; }
//       if (teamA.goalsBalance > teamB.goalsBalance) { return -1; }
//       if (teamA.goalsFavor < teamB.goalsFavor) { return 1; }
//       if (teamA.goalsFavor > teamB.goalsFavor) { return -1; }
//       // 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.
//       if (teamA.goalsOwn > teamB.goalsOwn) { return 1; }
//       if (teamA.goalsOwn < teamB.goalsOwn) { return -1; }

//       return 0;
//     })
//   ;

//   // contar ptos qdo time eh away e home e somar (funcao com 2 queries)
//   async getLeaderBoard(): Promise<any> {
//     const teamList = await this.teamService.getAllTeams();
//     const gameList = await this.matchService.getAllFinishedMatches();
//     console.log('======> teamList: ', teamList);
//     const games = teamList.map((teams) => {
//       LeaderBoardService.resetHomeTeamScore();
//       LeaderBoardService.resetAwayTeamScore();
//       homeTeamTable.name = teams.teamName;
//       awayTeamTable.name = teams.teamName;

//       console.log('-------> teams:', teams);
//       LeaderBoardService.calculate(teams, gameList);
//       const homeResult = { ...homeTeamTable };
//       // const awayResult = { ...awayTeamTable };
//       return homeResult;
//     });
//     console.log('------> games: ', games);
//     // games.sort((next, prev) => prev.totalPoints - next.totalPoints);
//     // const sortedGames = LeaderBoardService.sortGames(games);
//     // return sortedGames;
//   }
// }

// export default LeaderBoardService;
