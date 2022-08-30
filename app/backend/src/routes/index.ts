import { Router } from 'express';
import LoginController from '../controllers/login.controller';
// import validateLoginInput from '../middlewares/login.middleware';

const route = Router();
const loginController = new LoginController();

route.post(
  '/login',
  (req, res, next) => loginController.signIn(req, res, next),
);

export default route;
