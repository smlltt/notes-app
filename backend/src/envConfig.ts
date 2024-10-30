require("dotenv").config();

const envConfig = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  dataBaseUrl: process.env.DATABASE_URL,
};
export default envConfig;
