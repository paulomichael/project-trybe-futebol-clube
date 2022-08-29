import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import LoginService from '../services/login.service';

class LoginController {
  // constructor(private loginService = new LoginService()) { }

  //  public getAll = async (_req: Request, res: Response) => {
  //    const products = await this.loginService.getAll();
  //    res.status(200).json(products);
  //  };
  //  
  //  public create = async (req: Request, res: Response) => {
  //    const product = req.body;
  //    const productCreated = await this.loginService.create(product);
  //    // res.status(StatusCodes.CREATED).json(productCreated);
  //    res.status(201).json(productCreated);
  //  };
  validateLoginInput(req: Request, res: Response): any {
   res.status(200).json('LoginController.validateLoginInput');
  }
}

export default LoginController;

