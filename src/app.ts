import express, { Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResoure from './middleware/validateResoure';
import { createUserSchema } from './schema/user.schema';

const app = express();
app.use(express.json());

app.get('/api/v1/test', (req: Request, res: Response) => {
  res.json({ message: 'Test' });
});

app.post('/api/v1/test', validateResoure(createUserSchema), createUserHandler);

export default app;
