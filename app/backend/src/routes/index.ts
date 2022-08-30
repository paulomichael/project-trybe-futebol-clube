import { Router } from 'express';
import validateLoginInput from '../middlewares/login.middleware';
import LoginController from '../controllers/login.controller';
import loginValidationMiddleware from '../middlewares/login.validation.middleware';
import TeamController from '../controllers/team.controller';

const route = Router();
const loginController = new LoginController();
const teamController = new TeamController();

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
export default route;
