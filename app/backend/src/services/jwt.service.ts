import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { SignOptions } from 'jsonwebtoken';
import IUserLogin from '../interfaces/IUserLogin';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const signOpts: SignOptions = {
  expiresIn: '365d',
  algorithm: 'HS256',
};

class createToken {
  static signIn(payload: IUserLogin): string {
    return jwt.sign({ data: payload }, JWT_SECRET, signOpts);
  }

  static verify(payload: string) {
    if (!payload) {
      return { message: 'No token for you, GoodBye!' };
    }
    const token = jwt.verify(payload, JWT_SECRET);
    console.log('----------> jwt.service.verify().token: ', token);
    return token;
  }
}

export default createToken;
