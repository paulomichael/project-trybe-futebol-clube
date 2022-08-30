import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { SignOptions } from 'jsonwebtoken';
import IUserLogin from '../interfaces/IUserLogin';
// import ReqError from '../helpers/Req.error';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const signOpts: SignOptions = {
  expiresIn: '365d',
  algorithm: 'HS256',
}

class createToken {
  static signIn(payload: IUserLogin): string {
    return jwt.sign({ data: payload}, JWT_SECRET, signOpts,);
  }
}

export default createToken;
