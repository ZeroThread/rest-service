import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.wbuxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
