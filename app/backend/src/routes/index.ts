import { Router } from 'express';
import validateLoginInput from '../middlewares/login.middleware';
import validateToken from '../middlewares/token.middleware';
import LoginController from '../controllers/login.controller';
import loginValidationMiddleware from '../middlewares/login.validation.middleware';
import TeamController from '../controllers/team.controller';
import MatchController from '../controllers/match.controller';
import LeaderBoardHomeController from '../controllers/leaderBoardHome.controller';

const route = Router();
const loginController = new LoginController();
const teamController = new TeamController();
const matchController = new MatchController();
const leaderBoardHomeController = new LeaderBoardHomeController();

route.post(
  '/login',
  validateLoginInput,
  (req, res, next) => loginController.signIn(req, res, next),
);

route.get(
  '/login/validate',
  (req, res) => loginValidationMiddleware(req, res),
);

route.get(
  '/teams',
  (req, res, next) => teamController.getAllTeams(req, res, next),
);

route.get(
  '/teams/:id',
  (req, res, next) => teamController.getTeamById(req, res, next),
);

route.get(
  '/matches',
  (req, res, next) => matchController.getAllMatches(req, res, next),
);

route.post(
  '/matches',
  validateToken,
  (req, res, next) => matchController.createMatch(req, res, next),
);

route.patch(
  '/matches/:id/finish',
  (req, res, next) => matchController.finishMatch(req, res, next),
);

route.patch(
  '/matches/:id',
  (req, res, next) => matchController.updateMatch(req, res, next),
);

route.get(
  '/leaderboard/home',
  (req, res, next) => leaderBoardHomeController.getLeaderBoardHome(req, res, next),
);

export default route;
