// import { NextFunction, Request, Response } from 'express';
import { /* NextFunction, */ Request, Response } from 'express';

// function validateLoginInput(req: Request, res: Response, next: NextFunction) {
async function validateLoginInput(req: Request, res: Response) {
  const { email, password } = await req.body;
  const re = /\S+@\S+\.\S+/;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'All fields must be filled' });
  }

  if (!re.test(email)) {
    return res
      .status(400)
      .json({ message: 'Incorrect email or password' });
  }

  //  if (password.length <= 6) {
  //    return res.status(400).json({ "message": "All fields must be filled" });
  //  }

  return res.status(200).json('middlewares/login.middleware.ts');
  // next();
}

export default validateLoginInput;
