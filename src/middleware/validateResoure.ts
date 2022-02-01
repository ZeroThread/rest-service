import { Express, Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import log from '../utils/logger';
const validateResoure =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      log.info(req.body);
      schema.parse({ body: req.body, params: req.params, query: req.query });
    } catch (error: any) {
      return res.status(400).send(error.errors);
    }
  };

export default validateResoure;
