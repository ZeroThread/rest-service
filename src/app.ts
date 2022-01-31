import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/test', (req: Request, res: Response) => {
  res.json({ message: 'Test' });
});

export default app;
