import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) {

  }

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log('----> loginController.req.body:', req.body);
      const { email, password } = req.body;
      // console.log('----> loginController.password:', password);
      const token = await this.loginService.signIn({ email, password });
      if (!token) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default LoginController;
