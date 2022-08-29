import { Application as App } from 'express';
import loginController from '../controllers/login.controller';
import validateLoginInput from '../middlewares/login.middleware';

const Routes = (app: App) => {
  // app.get('/login', (req, res) => res.status(200).json('Login'));
  // app.post('/login', loginController.validateLoginInput);
  app.post('/login', validateLoginInput);
  // app.use(errorMiddleware);
}

export default Routes;
