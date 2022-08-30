import { Request, Response, NextFunction } from 'express';

async function validateLoginInput(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = await req.body;
    const re = /\S+@\S+\.\S+/;

    if (!email || !password) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }

    if (!re.test(email)) {
      return res.status(400)
        .json({ message: 'Incorrect email or password' });
    }

    if (password.length <= 6) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    // return res.status(200).json('middlewares/login.middleware.ts');
    next();
  } catch (error) {
    next(error);
  }
}

export default validateLoginInput;
