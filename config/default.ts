import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wbuxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  saltWorkFactor: 13,
};
