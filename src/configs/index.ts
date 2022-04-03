import dotenv from 'dotenv';
import TokenTypes from './interfaces';

dotenv.config();

const config: TokenTypes = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN ?? '24h',
};

export default config;
