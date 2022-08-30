import * as bcrypt from 'bcryptjs';

class validateLogin {
  static validatePassword(givenPassword: string, passwordHash: string) {
    const passwordMatch = bcrypt.compareSync(givenPassword, passwordHash);

    if (!passwordMatch) {
      // throw new Error('Incorrect email or password');
      return ({ message: 'Incorrect email or password' });
    }
  }
}

export default validateLogin;
