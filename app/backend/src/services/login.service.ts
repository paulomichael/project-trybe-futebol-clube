// import connection from '../models/connection';
// import LoginModel from '../models/product.model';
// import { IProduct } from '../interfaces/product.interface';
import User from '../database/models/user';
import IUserLogin from '../interfaces/IUserLogin';
import validateLogin from '../auth/validateLogin';
import createToken from './jwt.service';

class LoginService {
  constructor(private userModel = User) {

  }

  async signIn(payload: IUserLogin): Promise<string | object> {
    // async signIn(payload: IUserLogin): Promise<string> {
    const user = await this.userModel.findOne({
      where: { email: payload.email },
    });
    if (!user) {
      // throw new Error('Incorrect email or password');
      // return { message: 'Incorrect email or password' };
      return '';
    }
    const validation = validateLogin.validatePassword(payload.password, user.password);
    console.log('-------> loginService.validation: ', validation);
    // if (!validation || validation.message) {
    //   return 'Validation ERROR';
    // }
    const token = createToken.signIn(user);
    return token;
  }
}

export default LoginService;
