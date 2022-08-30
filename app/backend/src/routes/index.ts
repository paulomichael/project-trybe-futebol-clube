import { Router } from 'express';
import validateLoginInput from '../middlewares/login.middleware';
import LoginController from '../controllers/login.controller';

const route = Router();
const loginController = new LoginController();

route.post(
  '/login',
  validateLoginInput,
  (req, res, next) => loginController.signIn(req, res, next),
);

export default route;
