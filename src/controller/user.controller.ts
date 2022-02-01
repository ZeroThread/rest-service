import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import logger from '../utils/logger';
import { createUserService } from '../service/user.service';
import { CreateUserInput } from '../schema/user.schema';

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info(req.body);
    const user = await createUserService(req.body);
    logger.info(user);
    return user;
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
};
