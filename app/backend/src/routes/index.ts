import { Router } from 'express';
import validateLoginInput from '../middlewares/login.middleware';
import LoginController from '../controllers/login.controller';
import loginValidationMiddleware from '../middlewares/login.validation.middleware';

const route = Router();
const loginController = new LoginController();

route.post(
  '/login',
  validateLoginInput,
  (req, res, next) => loginController.signIn(req, res, next),
);
route.get(
  '/login/validate',
  (req, res) => loginValidationMiddleware(req, res),
);
export default route;
