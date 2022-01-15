import express from 'express';
import dotenv from 'dotenv';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

dotenv.config();

const port = config.get<number>('port');
const app = express();

app.listen(port, async () => {
  logger.info(`App 🚀 is running on port ${port}`);
  routes(app);
  await connect();
});
