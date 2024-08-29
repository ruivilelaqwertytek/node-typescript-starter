import { Response, NextFunction, Request} from 'express';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
  console.error('erroHandler middleware:', err);
  res.status(404).send({ errors: [{ message: 'Something went wrong' }] });
  res.status(500).send({ errors: [{ message: 'Something went wrong' }] });
};
