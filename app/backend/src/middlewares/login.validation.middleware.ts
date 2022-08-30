import { Request, Response } from 'express';
import createToken from '../services/jwt.service';

const loginValidationMiddleware = (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  const verifiedToken = createToken.verify(token) as { data: { role: string } };
  console.log('-------> login.validation..verifiedToken.data.role: ', verifiedToken.data.role);
  return res.status(200).json({ role: verifiedToken.data.role });
};

export default loginValidationMiddleware;
