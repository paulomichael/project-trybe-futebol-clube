import { Request, Response, NextFunction } from 'express';
import Jwt from '../services/jwt.service';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: 'Token not found' });
  }

  try {
    Jwt.verify(authorization);
  } catch (error) {
    return res
      .status(401)
      .json({
        message: 'Token must be a valid token' });
  }
  next();
};

export default validateToken;
