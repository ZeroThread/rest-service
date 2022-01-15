import express from 'express';
import dotenv from 'dotenv';
import config from 'config';

const port = config.get<number>('port');
dotenv.config();
const app = express();

app.listen(port, () => {
  console.log(`🚀 is running on port ${port}`);
});
