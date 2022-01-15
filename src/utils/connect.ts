import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger';

const connect = async () => {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    logger.info('Connected to MongoDB');
  } catch (err) {
    logger.error(`💣 ${err}`);
    process.exit(1);
  }
};

export default connect;
