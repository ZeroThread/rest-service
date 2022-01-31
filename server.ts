require('dotenv').config();
import config from 'config';
import connect from './src/utils/connect';
import logger from './src/utils/logger';
import app from './src/app';

const port = config.get<number>('port');

app.listen(port, async () => {
  logger.info(`App 🚀 is running on port ${port}`);
  await connect();
});
